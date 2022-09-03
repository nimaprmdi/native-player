import { useEffect, useState } from "react";
import CardPinkRibbon from "../components/common/cards/CardPinkRibbon";
import SingleCards from "./common/cards/SingleCards";
import GridTitle from "./common/GridTitle";
import Carousel from "./common/Carousel";
import Post from "../models/Post";
import { Icon } from "@iconify/react";
import { millisecondsToMinutes } from "../utils/helpers";
import { Link } from "react-router-dom";

interface ContentProps {
    postData: Post;
    type: string;
    handlePlay: (e: string) => void;
}

const Content = ({ postData, type, handlePlay }: ContentProps): JSX.Element => {
    const [featuredImage, setFeaturedImage] = useState("");

    useEffect(() => {}, [postData]);

    return (
        <article className="w-full mb-8">
            <h2 className="c-content__title text-h2 pl-4 leading-8">{postData.name}</h2>

            <div className="c-content__meta w-full flex flex-wrap gap-3 justify-start items-center pl-4 mt-8 mb-8">
                {type !== "artist" && (
                    <div className="flex items-center mr-1 desktop:mr-6">
                        <Icon className="text-gray-500" icon="ant-design:user-outlined" />
                        <span className="text-gray-500 ml-1">
                            <>
                                {postData.artists &&
                                    postData.artists.map((artist, index) => {
                                        return (
                                            <Link
                                                key={artist.id}
                                                className="mr-2 text-gray-500 capitalize"
                                                to={`/single?id=${artist.id}&type=artist`}
                                            >
                                                {artist.name}
                                                {postData.artists && index < postData.artists.length - 1 ? "," : ""}
                                            </Link>
                                        );
                                    })}
                            </>
                        </span>
                    </div>
                )}

                {type !== "artist" && (
                    <div className="flex items-center mr-1 desktop:mr-6">
                        <Icon className="text-gray-500" icon="akar-icons:clock" />
                        <span className="text-gray-500 ml-1">
                            Released in{" "}
                            {postData.album && type === "track" ? postData.album.release_date : postData.release_date}
                        </span>
                    </div>
                )}

                {type === "track" && (
                    <div className="flex items-center mr-1 desktop:mr-6">
                        <Icon className="text-gray-500" icon="akar-icons:music" />
                        <span className="text-gray-500 ml-1">
                            Total Time {postData.duration_ms && millisecondsToMinutes(postData.duration_ms)}
                        </span>
                    </div>
                )}
            </div>

            <div className="c-content__article w-full flex flex-wrap justify-center desktop:justify-start gap-2 relative">
                <div className="w-full flex flex-wrap desktop:flex-nowrap justify-start gap-2 px-2">
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
                                url={`/single?id=${postData.album?.id}&type=album`}
                            />

                            <SingleCards
                                icon="bi:person-lines-fill"
                                title="go to artist"
                                btnText="go now"
                                url={`/single?id=${postData.artists![0].id}&type=artist`}
                            />
                        </>
                    )}

                    {postData.type === "album" && (
                        <>
                            <SingleCards
                                icon="dashicons:playlist-audio"
                                title="Total tracks"
                                btnText={postData.total_tracks.toString()}
                                url="#"
                                isLink={true}
                            />

                            <SingleCards
                                icon="ph:brackets-curly-fill"
                                title="Label Name"
                                btnText={postData.label}
                                url="#"
                                isLink={true}
                            />
                        </>
                    )}

                    {postData.type === "artist" && (
                        <>
                            <SingleCards
                                icon="ic:baseline-category"
                                title="Genres"
                                btnText={
                                    postData.genres && postData.genres.length > 0
                                        ? postData.genres?.map((genre) => genre).toString()
                                        : ""
                                }
                                url={postData.external_urls?.spotify || ""}
                                isLink={true}
                            />

                            <SingleCards
                                icon="fluent:people-audience-20-regular"
                                title="followers"
                                btnText={postData.followers?.total ? postData.followers.total.toString() : ""}
                                url={postData.external_urls?.spotify || ""}
                                isLink={true}
                            />
                        </>
                    )}

                    <SingleCards
                        icon="akar-icons:spotify-fill"
                        title="Open in spotify"
                        btnText="Open Now"
                        url={postData.external_urls?.spotify || ""}
                        isLink={true}
                    />
                </div>

                <div className="w-full order-3 desktop:order-3">
                    <GridTitle title="New Releases" customClass="mt-6" readMore={false} />

                    <Carousel>{/* <CardPinkRibbon id={postData.id} image={} name={postData.name} /> */}</Carousel>
                </div>
            </div>
        </article>
    );
};

export default Content;
