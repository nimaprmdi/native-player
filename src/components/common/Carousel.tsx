import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

interface CarouselProps {
    children?: JSX.Element[] | JSX.Element;
}

interface FlickityOptions {
    wrapAround?: boolean;
    pageDots?: boolean;
    cellAlign?: string;
}

const Carousel = ({ children }: CarouselProps): JSX.Element => {
    const flickityOptions: FlickityOptions = {
        wrapAround: false,
        pageDots: false,
        cellAlign: "left",
    };

    return (
        <section>
            <Flickity options={flickityOptions} className={`c-slider w-full h-80 mt-6 px-2`}>
                {children}
            </Flickity>
        </section>
    );
};

export default Carousel;
