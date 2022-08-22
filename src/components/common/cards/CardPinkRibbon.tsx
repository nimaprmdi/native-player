import rihana from "../../../assets/images/releases/v1.jpg";

const CardPinkRibbon = () => {
    return (
        <a
            href="#"
            className="mx-2 w-full md:w-60 desktop:w-60 h-80 bg-accent rounded hover:text-white hover:opacity-90"
        >
            <div className="relative text-center ">
                <img className="w-full h-60 rounded-t object-cover" src={rihana} alt="rihana" />

                <h5 className="text-h5 mt-6 ">Hello Mother</h5>
            </div>
        </a>
    );
};

export default CardPinkRibbon;
