import React from "react";
import Carousel from "../components/common/Carousel";
import GridMd from "../components/common/GridMd";
import Sidebar from "../components/common/Sidebar";
import Slider from "../components/Slider";

const Home = (): JSX.Element => {
    return (
        <section className="c-home w-full pt-14 pb-40 md:pt-0 desktop:pt-8 desktop:pl-8 mb-56 flex justify-between flex-wrap">
            <div className="w-full desktop:w-3/5">
                <Slider />
                <GridMd />
                <GridMd />
            </div>
            <div className="w-full desktop:w-2/5">
                <Sidebar />
            </div>

            <div className="w-full">
                <Carousel />
            </div>
        </section>
    );
};

export default Home;
