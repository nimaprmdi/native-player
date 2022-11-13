import { useState } from "react";
import { textCutter } from "../../../utils/helpers";
import { Link } from "react-router-dom";
import Image from "../elements/Image";

interface CardRibbonProps {
  id: string;
  image: string;
  readMore?: boolean;
  title?: string;
  type: string;
}

const CardRibbon = ({ id, image, readMore = true, title, type }: CardRibbonProps) => {
  return (
    <>
      <Link
        to={`/single?id=${id}${type && `&type=${type}`}`}
        className="c-card__item-link w-full text-h5 font-bold hover:text-accent"
      >
        <div className="c-card__item w-full">
          <Image
            image={image}
            alt={"track - image"}
            imageClass="c-card__image w-full rounded-t h-2/4 object-cover"
            loaderClass="w-full h-2/4 before:h-2/4 relative"
          />

          <div className="c-card__item-cta w-full text-center pt-4 pb-4 bg-gray-800 text-white rounded-b">
            {readMore ? "Listen Now" : textCutter(title!, 20)}
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardRibbon;
