import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import rihana from "../assets/images/rihana.jpg";

interface SliderProps {
    customClass?: string;
}

const Slider = ({ customClass }: SliderProps): JSX.Element => {
    const flickityOptions = {
        // pageDots: false,
        // wrapAround: true,
        // prevNextButtons: false,
    };

    return (
        <Flickity options={flickityOptions} className={`c-slider w-full desktop:h-147.5 ${customClass}`}>
            <div className="w-full mx-10">
                <div className="relative">
                    <img className="w-full h-2/5 desktop:h-147.5 rounded object-cover" src={rihana} alt="rihana" />
                </div>
            </div>

            <div className="w-full mx-10">
                <div className="relative">
                    <img className="w-full h-2/5 desktop:h-147.5 rounded object-cover" src={rihana} alt="rihana" />
                </div>
            </div>
        </Flickity>
    );
};

export default Slider;
