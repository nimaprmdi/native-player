import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Image from "../elements/Image";

interface CardCaptionProps {
  id: string;
  type: string;
  image: string;
  readMore?: boolean;
  name: string;
  functional?: () => void;
}

const CardCaption = ({ id, type, image, readMore = true, name, functional }: CardCaptionProps) => {
  return (
    <Link
      to={`/single?id=${id}${type && `&type=${type}`}`}
      onClick={() => functional && functional()}
      className="c-card__item-link w-full text-h5 font-bold hover:text-accent"
    >
      <div className="c-card__item w-full">
        {image !== "" ? (
          <Image
            image={image}
            alt={name}
            imageClass="c-card__image w-full h-2/4 rounded object-cover object-left-top"
            loaderClass="w-full h-2/4 before:h-2/4 relative"
          />
        ) : (
          <div className="w-full h-full rounded bg-primary flex justify-center items-center">
            <Icon
              className="c-card__image w-1/2 h-60 rounded object-cover object-left-top"
              icon="carbon:user-profile"
            />
          </div>
        )}

        <div className="w-full text-center mt-4">{readMore ? "Listen Now" : name}</div>
      </div>
    </Link>
  );
};

export default CardCaption;
