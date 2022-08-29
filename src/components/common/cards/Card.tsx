interface CardProps {
    id: string;
    image: string;

    title?: string;
}

const Card = ({ id, image, title }: CardProps) => {
    return (
        <a href="#" className="c-card__item-link w-full text-h5 font-bold hover:text-accent">
            <div className="c-card__item w-full">
                <img className="c-card__image w-full rounded" src={image} alt="album pic" />
            </div>
        </a>
    );
};

export default Card;
