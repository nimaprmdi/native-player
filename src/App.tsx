import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import Radio from "./views/Radio";
import Browse from "./views/Browse";
import NotFound from "./views/NotFound";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Single from "./views/Single";
import Artists from "./models/Artists";
import spotifyService from "./services/SpotifyServices";
import FeaturedPlayLists from "./models/FeaturedPlayLists";
import FeaturedPlayListsContext from "./utils/context/featuredPlayLists";
import Recommendation from "./models/Recommendation";
import SongCategory from "./models/SongCategory";
import FeaturedAlbums from "./models/FeturedAlbums";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App(): JSX.Element {
    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState<Artists[]>([]);
    const [asideToggle, setAsideToggle] = useState(false);
    const [featuredPlayList, setFeaturedPlayList] = useState<FeaturedPlayLists>({ name: "", tracks: { items: [] } });
    const [recommendedTracks, setRecommendedTracks] = useState<Recommendation>({ tracks: [] });
    const [playListsByCats, setPlayListsByCats] = useState<SongCategory>({ playlists: { items: [] } });
    const [featuredAlbums, setFeaturedAlbums] = useState<FeaturedAlbums>({ albums: [] });

    const getRecommendedTracks = async () => {
        const recommendedTracksLocal = await spotifyService.getRecommendedTracks(token);
        setRecommendedTracks(recommendedTracksLocal);
    };

    const getPlayListsByCats = async () => {
        const topItems = await spotifyService.getPlayListsByCat(token);
        setPlayListsByCats(topItems);
    };

    const getFeaturedAlbums = async () => {
        const featuredAlbums = await spotifyService.getFeaturedAlbums(token);
        setFeaturedAlbums(featuredAlbums);
    };

    const getFeaturedPlayList = async () => {
        const featuredPlayList: FeaturedPlayLists = await spotifyService.getFeaturedPlayList(token);
        setFeaturedPlayList(featuredPlayList);
    };

    useEffect(() => {
        token && getRecommendedTracks();
        token && getPlayListsByCats();
        token && getFeaturedAlbums();
        token && getFeaturedPlayList();
    }, [token]);

    const handleToggle = () => {
        setAsideToggle(!asideToggle);
    };

    useEffect(() => {
        const hash: string = window.location.hash;
        let token: string | undefined | null = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                ?.split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token!);
        }

        setToken(token!);
    }, []);

    useEffect(() => {}, [featuredPlayList]);

    return (
        <BrowserRouter>
            <div className="App min-h-screen">
                <section className="c-page__aside">
                    <Navigation asideToggle={asideToggle} />
                </section>

                <section className={`c-page__content ${!asideToggle && "md:ml-14"}`}>
                    <Header
                        logout={() => spotifyService.logOutSpotify(setToken)}
                        searchArtist={(e) => spotifyService.searchArtist(e, token, searchKey, setArtists)}
                        setSearchKey={setSearchKey}
                        token={token}
                        onAsideToggle={handleToggle}
                        artists={artists}
                        setArtists={setArtists}
                    />

                    <Routes>
                        <Route
                            path="/"
                            element={
                                <FeaturedPlayListsContext.Provider value={featuredPlayList}>
                                    <Home
                                        recommendedTracks={recommendedTracks}
                                        playListsByCats={playListsByCats}
                                        featuredAlbums={featuredAlbums}
                                    />
                                </FeaturedPlayListsContext.Provider>
                            }
                        />
                        <Route path="/radio" element={<Radio />} />
                        <Route path="/browse" element={<Browse />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/single" element={<Single />} />

                        <Route path="*" element={<Navigate replace to="/404" />} />
                    </Routes>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
