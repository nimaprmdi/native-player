import { useState } from "react";
import Header from "./components/Header";
import { Navigation } from "./components/Navigation";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Radio from "./views/Radio";

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
                    </Routes>
                </BrowserRouter>
            </section>
        </div>
    );
}

export default App;
