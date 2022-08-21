import React from "react";
import GridMd from "../components/common/GridMd";
import Slider from "../components/Slider";

const Home = (): JSX.Element => {
    return (
        <section className="w-full pt-14 md:pt-0 desktop:pt-8 desktop:pl-8">
            <Slider />

            <GridMd />
        </section>
    );
};

export default Home;
