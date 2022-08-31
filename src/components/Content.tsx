import { useEffect } from "react";
import SingleCards from "./common/cards/SingleCards";
import GridTitle from "./common/GridTitle";
import Carousel from "./common/Carousel";
import Post from "../models/Post";
import { Icon } from "@iconify/react";
import { millisecondsToMinutes } from "../utils/helpers";
import { Link } from "react-router-dom";

interface ContentProps {
    postData: Post;
    handlePlay: (e: string) => void;
}

const Content = ({ postData, handlePlay }: ContentProps): JSX.Element => {
    useEffect(() => {}, [postData]);

    return (
        <article className="w-full mb-8">
            <h2 className="c-content__title text-h2 pl-4 leading-8">{postData.name}</h2>

            <div className="c-content__meta w-full flex flex-wrap gap-3 justify-start items-center pl-4 mt-8 mb-8">
                <div className="flex items-center mr-1 desktop:mr-6">
                    <Icon className="text-gray-500" icon="ant-design:user-outlined" />
                    <span className="text-gray-500 ml-1">
                        <>
                            {postData.artists.map((artist, index) => {
                                return (
                                    <Link
                                        key={artist.id}
                                        className="mr-2 text-gray-500 capitalize"
                                        to={`/single/${artist.id}`}
                                    >
                                        {artist.name}
                                        {index < postData.artists.length - 1 ? "," : ""}
                                    </Link>
                                );
                            })}
                        </>
                    </span>
                </div>

                <div className="flex items-center mr-1 desktop:mr-6">
                    <Icon className="text-gray-500" icon="akar-icons:clock" />
                    <span className="text-gray-500 ml-1">Released in {postData.album.release_date}</span>
                </div>

                <div className="flex items-center mr-1 desktop:mr-6">
                    <Icon className="text-gray-500" icon="akar-icons:music" />
                    <span className="text-gray-500 ml-1">Total Time {millisecondsToMinutes(postData.duration_ms)}</span>
                </div>
            </div>

            <div className="c-content__article w-full flex flex-wrap justify-center desktop:justify-start gap-2 relative">
                <div className="w-full flex justify-start gap-2">
                    {postData.type === "track" && (
                        <>
                            <SingleCards
                                icon="ant-design:play-circle-filled"
                                title="Play The Music"
                                btnText="Play now"
                                url="#"
                                functional={() => handlePlay(postData.preview_url)}
                            />

                            <SingleCards
                                icon="dashicons:album"
                                title="go to album"
                                btnText="go now"
                                url={`/single/${postData.album.id}`}
                            />
                            <SingleCards icon="bi:person-lines-fill" title="go to artist" btnText="go now" url="#" />
                        </>
                    )}

                    <SingleCards icon="akar-icons:spotify-fill" title="Open in spotify" btnText="Open Now" url="#" />
                </div>
                <div className="w-full order-3 desktop:order-3">
                    <GridTitle title="New Releases" customClass="mt-6" readMore={false} />

                    <Carousel>
                        {/* <CardPinkRibbon />
                    <CardPinkRibbon /> */}
                    </Carousel>
                </div>
            </div>
        </article>
    );
};

export default Content;
