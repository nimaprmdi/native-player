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
import axios from "axios";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Artists from "./models/Artists";
import config from "./services/config.json";

function App(): JSX.Element {
    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState<Artists[]>([]);

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

    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token");
    };

    const searchArtist = async (e: React.FormEvent) => {
        e.preventDefault();

        const { data } = await axios.get(`${config.apiUrl}/search`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: searchKey,
                type: "artist",
            },
        });

        setArtists(data.artists?.items);
    };

    /** */
    const [asideToggle, setAsideToggle] = useState(false);

    const handleToggle = () => {
        setAsideToggle(!asideToggle);
    };

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

    return (
        <div className="App min-h-screen">
            <section className="c-page__aside">
                <Navigation asideToggle={asideToggle} />
            </section>

            <section className={`c-page__content ${!asideToggle && "md:ml-14"}`}>
                <Header
                    logout={logout}
                    searchArtist={searchArtist}
                    setSearchKey={setSearchKey}
                    token={token}
                    audio={player}
                    onAsideToggle={handleToggle}
                    artists={artists}
                    setArtists={setArtists}
                />

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home token={token} />} />
                        <Route path="/radio" element={<Radio />} />
                        <Route path="/browse" element={<Browse />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/single" element={<Single />} />

                        <Route path="*" element={<Navigate replace to="/404" />} />
                    </Routes>
                </BrowserRouter>
            </section>
        </div>
    );
}

export default App;
