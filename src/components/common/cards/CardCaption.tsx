interface CardCaptionProps {
    id: string;
    image: string;
    readMore?: boolean;
    name?: string;
}

const CardCaption = ({ id, image, readMore = true, name }: CardCaptionProps) => {
    return (
        <a href={id} className="c-card__item-link w-full text-h5 font-bold hover:text-accent">
            <div className="c-card__item w-full">
                <img
                    className="c-card__image w-full h-60 rounded object-cover object-left-top"
                    src={image}
                    alt="album pic"
                />

                <div className="w-full text-center mt-4">{readMore ? "Listen Now" : name}</div>
            </div>
        </a>
    );
};

export default CardCaption;
