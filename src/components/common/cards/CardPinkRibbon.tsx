import { textCutter } from "../../../utils/helpers";

interface CardPinkRibbonProps {
    id: string;
    image: string;
    name: string;
}

const CardPinkRibbon = ({ image, name }: CardPinkRibbonProps) => {
    return (
        <a
            href="#"
            className="mx-2 w-full md:w-60 desktop:w-60 h-80 bg-accent rounded hover:text-white focus:text-white hover:opacity-90 focus:opacity-90"
        >
            <div className="relative text-center ">
                <img className="w-full rounded-t object-cover" src={image} alt={name} />

                <h5 className="text-h5 pt-6 px-2">{textCutter(name)}</h5>
            </div>
        </a>
    );
};

export default CardPinkRibbon;
