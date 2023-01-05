// Reacts
import { useState, useEffect, useRef } from "react";
// Components
import Header from "./components/Header";
import { Navigation } from "./components/Navigation";
// Views
import Home from "./views/Home";
import Radio from "./views/Radio";
import Browse from "./views/Browse";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";
import Single from "./views/Single";
// import Blog from "./views/Blog";
import Login from "./views/Login";
// Models
import Artists, { ArtitstsObj } from "./models/Artists";
import FeaturedPlayLists from "./models/FeaturedPlayLists";
import FeaturedPlayListsContext from "./utils/context/featuredPlayLists";
import Recommendation from "./models/Recommendation";
import SongCategory from "./models/SongCategory";
import FeaturedAlbums from "./models/FeturedAlbums";
// Third-Party
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import { APITypes } from "plyr-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// Requesters
import * as requester from "./services/requesters";

function App(): JSX.Element {
    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [asideToggle, setAsideToggle] = useState(false);
    const [featuredPlayList, setFeaturedPlayList] = useState<FeaturedPlayLists>({ name: "", tracks: { items: [] } });
    const [recommendedTracks, setRecommendedTracks] = useState<Recommendation>({ tracks: [] });
    const [playListsByCats, setPlayListsByCats] = useState<SongCategory>({ playlists: { items: [] } });
    const [featuredAlbums, setFeaturedAlbums] = useState<FeaturedAlbums>({ albums: [] });
    const [relatedArtists, setRelatedArtists] = useState<ArtitstsObj>({ artists: [] });
    const [currentMusic, setCurrentMusic] = useState("");

    const audioRef = useRef<APITypes>(null);
    const navigate = useNavigate();

    const handleToggle = () => {
        setAsideToggle(!asideToggle);
    };

    const handleAudioChange = (e: string) => {
        setCurrentMusic(e);

        setTimeout(() => {
            audioRef.current?.plyr.play();
        }, 500);
    };

    useEffect(() => {
        if (token) {
            requester.getRecommendedTracks(token, setRecommendedTracks);
            requester.getPlayListsByCats(token, setPlayListsByCats);
            requester.getFeaturedAlbums(token, setFeaturedAlbums);
            requester.getFeaturedPlayList(token, setFeaturedPlayList);
            requester.getRelatedArtists(token, setRelatedArtists);
        }
    }, [token]);

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
            navigate("/");

            if (token !== null || token !== undefined) {
                window.localStorage.setItem("token", token!);
            }
        }

        setToken(token!);
    }, []);

    useEffect(() => {
        if (window.localStorage.getItem("token") === null || !window.localStorage.getItem("token")) {
            setToken("");
            navigate("/login");
        }
    }, [window.location.href, token, window.localStorage.getItem("token")]);

    return (
        <>
            <ScrollToTop />

            <div className="App min-h-screen">
                <ToastContainer />

                <section className="c-page__aside">
                    <Navigation asideToggle={asideToggle} />
                </section>

                <section className={`c-page__content ${!asideToggle && "md:ml-14"}`}>
                    <Header
                        setToken={setToken}
                        searchKey={searchKey}
                        setSearchKey={setSearchKey}
                        token={token}
                        onAsideToggle={handleToggle}
                        currentMusic={currentMusic}
                        audioRef={audioRef}
                    />

                    <Routes>
                        <Route
                            path="/"
                            element={
                                <FeaturedPlayListsContext.Provider value={featuredPlayList}>
                                    <Home featuredAlbums={featuredAlbums} playListsByCats={playListsByCats} recommendedTracks={recommendedTracks} />
                                </FeaturedPlayListsContext.Provider>
                            }
                        />
                        <Route
                            path="/radio"
                            element={<Radio recommendedTracks={recommendedTracks} playListsByCats={playListsByCats} featuredAlbums={featuredAlbums} />}
                        />
                        <Route path="/browse" element={<Browse relatedArtists={relatedArtists.artists} />} />
                        <Route path="/404" element={<NotFound />} />
                        {/* <Route path="/blog" element={<Blog />} /> */}
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/single"
                            element={<Single token={token} setCurrentMusic={(e) => handleAudioChange(e)} recommendedTracks={recommendedTracks} />}
                        />

                        <Route path="/login" element={<Login />} />

                        {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
                    </Routes>
                </section>
            </div>
        </>
    );
}

export default App;
