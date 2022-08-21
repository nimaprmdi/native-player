import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import rihana from "../../assets/images/releases/v1.jpg";

interface FlickityOptions {
    wrapAround?: boolean;
    pageDots?: boolean;
    cellAlign?: string;
}

const Carousel = (): JSX.Element => {
    const flickityOptions: FlickityOptions = {
        wrapAround: false,
        pageDots: false,
        cellAlign: "left",
    };

    return (
        <section>
            <div className="w-3/5 px-2 desktop:px-0 flex items-center justify-between mt-16">
                <div className="flex items-center">
                    <h2 className="mr-2 text-h2">Carousel</h2>
                    <span className="c-badge">New</span>
                </div>
            </div>

            <Flickity options={flickityOptions} className={`c-slider w-full h-60 mt-6 px-2`}>
                <a
                    href="#"
                    className="mx-2 w-full md:w-60 desktop:w-60 h-80 bg-accent rounded hover:text-white hover:opacity-90"
                >
                    <div className="relative text-center ">
                        <img className="w-full h-60 rounded-t object-cover" src={rihana} alt="rihana" />

                        <h5 className="text-h5 mt-6 ">Hello Mother Fucker</h5>
                    </div>
                </a>
            </Flickity>
        </section>
    );
};

export default Carousel;
