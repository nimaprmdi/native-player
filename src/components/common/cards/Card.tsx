import { useState } from "react";
import Image from "../elements/Image";
import { Link } from "react-router-dom";

interface CardProps {
    id: string;
    image: string;
    title?: string;
    type: string;
}

const Card = ({ id, image, title, type }: CardProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Link
            to={`/single?id=${id}&type=${type}`}
            className="c-card__item-link w-full text-h5 font-bold hover:text-accent"
        >
            <div className="c-card__item w-full">
                <Image
                    image={image}
                    alt={title ? title : image}
                    imageClass="c-card__image w-full rounded h-72"
                    loaderClass="w-full h-72 before:h-72 relative"
                />
            </div>
        </Link>
    );
};

export default Card;
