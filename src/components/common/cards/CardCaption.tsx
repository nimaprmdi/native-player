import v1 from "../../../assets/images/releases/v1.jpg";

interface CardCaptionProps {
    image: string;
}

const CardCaption = ({ image }: CardCaptionProps) => {
    return (
        <a href="#" className="c-card__item-link w-full text-h5 font-bold hover:text-accent">
            <div className="c-card__item w-full">
                <img className="c-card__image w-full rounded" src={image} alt="album pic" />

                <div className="w-full text-center mt-4">Listen Now</div>
            </div>
        </a>
    );
};

export default CardCaption;
