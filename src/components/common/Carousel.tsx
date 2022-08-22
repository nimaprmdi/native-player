import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import CardPinkRibbon from "./cards/CardPinkRibbon";

interface CarouselProps {
    children?: JSX.Element | JSX.Element[];
}

interface FlickityOptions {
    wrapAround?: boolean;
    pageDots?: boolean;
    cellAlign?: string;
}

const Carousel = ({ children }: CarouselProps): JSX.Element => {
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
                {children}
            </Flickity>
        </section>
    );
};

export default Carousel;
