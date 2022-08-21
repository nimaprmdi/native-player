import { useState } from "react";
import Header from "./components/Header";
import { Navigation } from "./components/Navigation";
import Home from "./views/Home";

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

                <Home />
            </section>
        </div>
    );
}

export default App;
