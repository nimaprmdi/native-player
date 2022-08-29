import { textCutter } from "../../../utils/helpers";

interface CardRibbonProps {
    id: string;
    image: string;
    readMore?: boolean;
    title?: string;
}

const CardRibbon = ({ id, image, readMore = true, title }: CardRibbonProps) => {
    return (
        <a href="#" className="c-card__item-link w-full text-h5 font-bold hover:text-accent">
            <div className="c-card__item w-full">
                <img className="c-card__image w-full rounded-t h-72 object-cover" src={image} alt="album pic" />

                <div className="c-card__item-cta w-full text-center pt-4 pb-4 bg-gray-800 text-white rounded-b">
                    {readMore ? "Listen Now" : textCutter(title!, 20)}
                </div>
            </div>
        </a>
    );
};

export default CardRibbon;
