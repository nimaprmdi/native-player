import { useState } from "react";
import { textCutter } from "../../../utils/helpers";

interface CardRibbonProps {
    id: string;
    image: string;
    readMore?: boolean;
    title?: string;
}

const CardRibbon = ({ id, image, readMore = true, title }: CardRibbonProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <a href="#" className="c-card__item-link w-full text-h5 font-bold hover:text-accent">
            <div className="c-card__item w-full">
                <img
                    className={`c-card__image w-full rounded-t h-72 object-cover ${isLoaded ? "block" : "hidden"}`}
                    src={image}
                    onLoad={() => setIsLoaded(true)}
                    alt="album pic"
                />

                {!isLoaded && <div className="c-card__loader w-full h-72 relative"></div>}

                <div className="c-card__item-cta w-full text-center pt-4 pb-4 bg-gray-800 text-white rounded-b">
                    {readMore ? "Listen Now" : textCutter(title!, 20)}
                </div>
            </div>
        </a>
    );
};

export default CardRibbon;
