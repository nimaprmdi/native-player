import v1 from "../../../assets/images/releases/v1.jpg";

const CardRibbon = () => {
    return (
        <a href="#" className="c-card__item-link w-full text-h5 font-bold hover:text-accent">
            <div className="c-card__item w-full">
                <img className="c-card__image w-full rounded-t" src={v1} alt="album pic" />

                <div className="c-card__item-cta w-full text-center pt-4 pb-4 bg-gray-800 text-white rounded-b">
                    Listen Now
                </div>
            </div>
        </a>
    );
};

export default CardRibbon;
