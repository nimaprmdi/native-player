import { useState } from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
    const [asideToggle, setAsideToggle] = useState(false);

    const addReminder = async (title: string) => {};

    return (
        <div className="App">
            <section className="c-page__aside">
                <Sidebar asideToggle={asideToggle} />
            </section>

            <section className={`c-page__content ${!asideToggle && "md:ml-14"} `}>
                <Header onAsideToggle={(e) => setAsideToggle(!asideToggle)} />
            </section>
        </div>
    );
}

export default App;
