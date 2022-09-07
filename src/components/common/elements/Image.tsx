import { useState } from "react";

interface ImageProps {
    image: string;
    alt: string;
    imageClass?: string;
    loaderClass?: string;
}

const Image = ({ image, alt, imageClass, loaderClass }: ImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <img
                className={`${isLoaded ? "block" : "hidden"} ${imageClass}`}
                src={image}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
            />

            {!isLoaded && <div className={`c-card__loader ${loaderClass}`}></div>}
        </>
    );
};

export default Image;
