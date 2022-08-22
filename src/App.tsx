import { useState } from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import Radio from "./views/Radio";
import Browse from "./views/Browse";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound";

function App(): JSX.Element {
    const [asideToggle, setAsideToggle] = useState(false);

    const handleToggle = () => {
        setAsideToggle(!asideToggle);
    };

    return (
        <div className="App min-h-screen">
            <section className="c-page__aside">
                <Navigation asideToggle={asideToggle} />
            </section>

            <section className={`c-page__content ${!asideToggle && "md:ml-14"}`}>
                <Header onAsideToggle={handleToggle} />

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/radio" element={<Radio />} />
                        <Route path="/browse" element={<Browse />} />
                        <Route path="/404" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </section>
        </div>
    );
}

export default App;
