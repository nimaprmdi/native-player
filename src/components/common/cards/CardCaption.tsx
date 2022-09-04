import { Link } from "react-router-dom";
import Image from "../elements/Image";

interface CardCaptionProps {
    id: string;
    type?: string;
    image: string;
    readMore?: boolean;
    name: string;
}

const CardCaption = ({ id, type, image, readMore = true, name }: CardCaptionProps) => {
    return (
        <Link
            to={`/single?id=${id}${type && `&type=${type}`}`}
            className="c-card__item-link w-full text-h5 font-bold hover:text-accent"
        >
            <div className="c-card__item w-full">
                <Image
                    image={image}
                    alt={name}
                    imageClass="c-card__image w-full h-60 rounded object-cover object-left-top"
                    loaderClass="w-full h-60 before:h-60 relative"
                />

                <div className="w-full text-center mt-4">{readMore ? "Listen Now" : name}</div>
            </div>
        </Link>
    );
};

export default CardCaption;
