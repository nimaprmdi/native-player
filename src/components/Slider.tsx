import { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import rihana from "../assets/images/rihana.jpg";
import FeaturedPlayLists, { TrackItems } from "../models/FeaturedPlayLists";
import "flickity/css/flickity.css";
import spotifyService from "../services/SpotifyServices";

interface SliderProps {
    customClass?: string;
    token: string;
}

const Slider = ({ customClass, token }: SliderProps): JSX.Element => {
    const [featuredPlayList, setFeaturedPlayList] = useState<FeaturedPlayLists>({ name: "", tracks: { items: [] } });

    const getFeaturedPlayList = async () => {
        const featuredPlayList: FeaturedPlayLists = await spotifyService.getFeaturedPlayList(token);
        setFeaturedPlayList(featuredPlayList);
    };

    useEffect(() => {
        token && getFeaturedPlayList();
    }, [token]);

    const flickityOptions = {
        cellSelector: ".carousel-cell",
    };

    const { tracks } = featuredPlayList;

    return (
        <Flickity options={flickityOptions} className={`c-slider w-full desktop:h-147.5 relative ${customClass}`}>
            <span className="c-badge absolute top-5 left-6 z-30">{featuredPlayList.name}</span>

            {tracks.items.map((playListItem, indexNumber) => {
                return (
                    indexNumber <= 5 && (
                        <div key={`carousel-cell-${indexNumber}`} className="carousel-cell w-full mx-10">
                            <div className="relative">
                                <img
                                    className="w-full h-2/5 desktop:h-147.5 rounded object-cover"
                                    src={rihana}
                                    alt="rihana"
                                />

                                <span className="c-badge c-badge--accent absolute bottom-6 left-6 text-black">
                                    <>
                                        {playListItem.track.name}

                                        {playListItem.track.album.name}

                                        {console.log(playListItem.track.album)}
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
