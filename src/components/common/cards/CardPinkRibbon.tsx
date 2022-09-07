import { useEffect, useState } from "react";
import { textCutter } from "../../../utils/helpers";
import { Link } from "react-router-dom";

interface CardPinkRibbonProps {
    id: string;
    name: string;
    image: string;
    type: string;
}

const CardPinkRibbon = ({ id, image, name, type }: CardPinkRibbonProps) => {
    const [featuredImage, setFeaturedImage] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        image ? setFeaturedImage(image) : setFeaturedImage("");
    }, [image]);

    return (
        <div className="mx-2 w-full md:w-60 desktop:w-60 h-80 bg-accent rounded hover:text-white focus:text-white hover:opacity-90 focus:opacity-90">
            {!isLoaded && <div className="c-card__loader w-full h-80 before:h-80 relative"></div>}

            <div className="relative text-center">
                <img
                    className={`w-full rounded-t object-cover ${isLoaded ? "block" : "hidden"}`}
                    src={featuredImage}
                    alt={name}
                    onLoad={() => setIsLoaded(true)}
                />

                <Link to={`/single?id=${id}&type=${type}`} className="a--secondary">
                    <h5 className="text-h5 pt-6 px-2">{textCutter(name)}</h5>
                </Link>
            </div>
        </div>
    );
};

export default CardPinkRibbon;
