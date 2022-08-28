import { useEffect, useState, useContext } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import FeaturedPlayLists from "../models/FeaturedPlayLists";
import FeaturedPlayListsContext from "../utils/context/featuredPlayLists";

interface SliderProps {
    customClass?: string;
}

const Slider = ({ customClass }: SliderProps): JSX.Element => {
    const flickityOptions = {
        cellSelector: ".carousel-cell",
    };

    const featuredPlayList = useContext(FeaturedPlayListsContext);

    useEffect(() => {
        console.log(featuredPlayList);
    }, [featuredPlayList]);

    return (
        <Flickity options={flickityOptions} className={`c-slider w-full desktop:h-147.5 relative ${customClass}`}>
            <span className="c-badge absolute top-5 -left-1 desktop:left-6 z-20">
                {featuredPlayList.name} By NimaPm
            </span>

            {featuredPlayList.tracks.items.map((playListItem, indexNumber) => {
                return (
                    indexNumber <= 5 && (
                        <div key={`carousel-cell-${indexNumber}`} className="carousel-cell w-full mx-10">
                            <div className="relative">
                                <img
                                    className="w-full h-2/5 desktop:h-147.5 rounded object-cover"
                                    src={playListItem.track.album.images[0].url}
                                    alt="rihana"
                                />

                                <span className="c-badge c-badge--accent absolute bottom-6 -left-1 desktop:left-6 text-black">
                                    <>
                                        {playListItem.track.name} from {playListItem.track.album.name}
                                    </>
                                </span>
                            </div>
                        </div>
                    )
                );
            })}
        </Flickity>
    );
};

export default Slider;
