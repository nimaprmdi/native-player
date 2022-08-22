import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import CardPinkRibbon from "./cards/CardPinkRibbon";
import GridTitle from "./GridTitle";

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
            <Flickity options={flickityOptions} className={`c-slider w-full h-60 mt-6 px-2`}>
                {children}
            </Flickity>
        </section>
    );
};

export default Carousel;
