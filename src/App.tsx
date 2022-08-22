import { useMemo, useState, useRef } from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import Radio from "./views/Radio";
import Browse from "./views/Browse";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import Blog from "./views/Blog";
import Plyr, { APITypes } from "plyr-react";

function App(): JSX.Element {
    const [asideToggle, setAsideToggle] = useState(false);

    const handleToggle = () => {
        setAsideToggle(!asideToggle);
    };

    const ref = useRef<APITypes>(null);

    const video = useMemo(() => {
        return (
            <Plyr
                ref={ref}
                source={{
                    type: "video",
                    sources: [
                        {
                            src: "http://nimapourmohammadi.com/wp-content/uploads/2022/08/dodge-tool.mp4",
                            provider: "html5",
                        },
                    ],
                }}
            />
        );
    }, []);

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
                <Header audio={player} onAsideToggle={handleToggle} />

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home video={video} />} />
                        <Route path="/radio" element={<Radio />} />
                        <Route path="/browse" element={<Browse />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </BrowserRouter>
            </section>
        </div>
    );
}

export default App;
