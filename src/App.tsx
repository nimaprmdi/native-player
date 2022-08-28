import { useMemo, useState, useRef, useEffect } from "react";
import Plyr, { APITypes } from "plyr-react";
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
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FeaturedPlayLists from "./models/FeaturedPlayLists";
import FeaturedPlayListsContext from "./utils/context/featuredPlayLists";

function App(): JSX.Element {
    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState<Artists[]>([]);
    const [asideToggle, setAsideToggle] = useState(false);
    const [featuredPlayList, setFeaturedPlayList] = useState<FeaturedPlayLists>({ name: "", tracks: { items: [] } });

    useEffect(() => {
        const hash: string = window.location.hash;
        let token: string | undefined | null = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                ?.split("=")[1];

            console.log(token);

            window.location.hash = "";
            window.localStorage.setItem("token", token!);
        }

        setToken(token!);
    }, []);

    const handleToggle = () => {
        setAsideToggle(!asideToggle);
    };

    const getFeaturedPlayList = async () => {
        const featuredPlayList: FeaturedPlayLists = await spotifyService.getFeaturedPlayList(token);
        console.log("getFeaturedPlayList", featuredPlayList);
        setFeaturedPlayList(featuredPlayList);
    };

    useEffect(() => {
        token && getFeaturedPlayList();
    }, [token]);

    const ref = useRef<APITypes>(null);
    const player = useMemo(() => {
        return (
            <Plyr
                ref={ref}
                source={{
                    type: "audio",
                    sources: [
                        {
                            src: "http://nimapourmohammadi.com/wp-content/uploads/2022/08/amb_bigfoot_backing_part_02_06.mp3",
                            provider: "html5",
                        },
                    ],
                }}
            />
        );
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
                        audio={player}
                        onAsideToggle={handleToggle}
                        artists={artists}
                        setArtists={setArtists}
                    />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <FeaturedPlayListsContext.Provider value={featuredPlayList}>
                                    <Home token={token} />
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
