import { useState } from "react";

interface CardProps {
    id: string;
    image: string;

    title?: string;
}

const Card = ({ id, image, title }: CardProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <a href="#" className="c-card__item-link w-full text-h5 font-bold hover:text-accent">
            <div className="c-card__item w-full">
                <img
                    className={`c-card__image w-full rounded h-72 ${isLoaded ? "block" : "hidden"}`}
                    src={image}
                    onLoad={() => setIsLoaded(true)}
                    alt="album pic"
                />

                {!isLoaded && <div className="c-card__loader w-full h-72 before:h-72 relative"></div>}
            </div>
        </a>
    );
};

export default Card;
