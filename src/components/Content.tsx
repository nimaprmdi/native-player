import CardPinkRibbon from "../components/common/cards/CardPinkRibbon";
import SingleCards from "./common/cards/SingleCards";
import GridTitle from "./common/GridTitle";
import Carousel from "./common/Carousel";
import Post from "../models/Post";
import Recommendation from "../models/Recommendation";
import { Icon } from "@iconify/react";
import { millisecondsToMinutes } from "../utils/helpers";
import { Link } from "react-router-dom";
import { ArtistTopSongs } from "../models/Artists";

interface ContentProps {
    postData: Post;
    type: string;
    handlePlay: (e: string) => void;
    recommendedTracks: Recommendation;
    artistTracks: ArtistTopSongs;
}

const Content = ({ postData, type, handlePlay, recommendedTracks, artistTracks }: ContentProps): JSX.Element => {
    return (
        <article className="w-full mb-8">
            <h2 className="c-content__title text-h2 pl-4 leading-8">
                {postData.name} ({type})
            </h2>

            <div className="c-content__meta w-full flex flex-wrap gap-3 justify-start items-center pl-4 mt-8 mb-0">
                {type === "track" && (
                    <div className="flex items-center mr-1 desktop:mr-6">
                        <Icon className="text-gray-500" icon="ant-design:user-outlined" />
                        <span className="text-gray-500 ml-1">
                            <>
                                {postData.artists &&
                                    postData.artists.map((artist, index) => {
                                        return (
                                            <Link key={artist.id} className="mr-2 text-gray-500 capitalize" to={`/single?id=${artist.id}&type=artist`}>
                                                {artist.name}
                                                {postData.artists && index < postData.artists.length - 1 ? "," : ""}
                                            </Link>
                                        );
                                    })}
                            </>
                        </span>
                    </div>
                )}

                {type === "track" && (
                    <div className="flex items-center mr-1 desktop:mr-6">
                        <Icon className="text-gray-500" icon="akar-icons:clock" />
                        <span className="text-gray-500 ml-1">
                            Released in {postData.album && type === "track" ? postData.album.release_date : postData.release_date}
                        </span>
                    </div>
                )}

                {type === "track" && (
                    <>
                        <div className="flex items-center mr-1 desktop:mr-6">
                            <Icon className="text-gray-500" icon="akar-icons:music" />
                            <span className="text-gray-500 ml-1">Total Time {postData.duration_ms && millisecondsToMinutes(postData.duration_ms)}</span>
                        </div>

                        <iframe src={`https://open.spotify.com/embed/track/${postData.id}`} width="100%" height="300px" className="mt-8"></iframe>
                    </>
                )}
            </div>

            <div className="c-content__article w-full flex flex-wrap justify-center desktop:justify-start gap-2 relative">
                <div className="w-full flex flex-wrap desktop:flex-nowrap justify-start gap-2 px-2">
                    {postData.type === "track" && (
                        <>
                            {postData.preview_url && (
                                <SingleCards
                                    icon="ant-design:play-circle-filled"
                                    title="Play The Music"
                                    btnText="Play now"
                                    url="#"
                                    functional={() => handlePlay(postData.preview_url)}
                                />
                            )}

                            <SingleCards icon="dashicons:album" title="go to album" btnText="go now" url={`/single?id=${postData.album?.id}&type=album`} />

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

                            <SingleCards icon="ph:brackets-curly-fill" title="Label Name" btnText={postData.label} url="#" isLink={true} />
                        </>
                    )}

                    {postData.type === "artist" && (
                        <>
                            <SingleCards
                                icon="ic:baseline-category"
                                title="Genres"
                                btnText={postData.genres && postData.genres.length > 0 ? postData.genres?.map((genre) => genre).toString() : "no data found"}
                                url={postData.external_urls?.spotify || ""}
                                isLink={true}
                            />

                            <SingleCards
                                icon="fluent:people-audience-20-regular"
                                title="followers"
                                btnText={postData.followers?.total ? postData.followers.total.toString() : ""}
                                url={postData.external_urls?.spotify || "no data found"}
                                isLink={true}
                            />
                        </>
                    )}

                    {postData.type === "playlist" && (
                        <>
                            <SingleCards
                                icon="humbleicons:user-asking"
                                title="Owner"
                                btnText={postData.owner?.display_name ? postData.owner.display_name : " "}
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
                    <>
                        {type === "artist" && (
                            <>
                                <GridTitle title="artist top songs" customClass="mt-6 capitalize" badge={false} />
                                <Carousel>
                                    {artistTracks.tracks.map((song, index) => {
                                        return (
                                            <>
                                                {index < 8 && (
                                                    <CardPinkRibbon
                                                        key={`recommended-artist-tracks-content-${song.id + Math.random() * 1000}`}
                                                        id={song.id}
                                                        image={song.album.images[0].url}
                                                        name={song.name}
                                                        type="track"
                                                    />
                                                )}
                                            </>
                                        );
                                    })}
                                </Carousel>
                            </>
                        )}

                        <GridTitle title="New releases" customClass="mt-6 capitalize" readMore={false} />

                        <Carousel>
                            {recommendedTracks.tracks.map((track, index) => {
                                return (
                                    <>
                                        {index < 8 && (
                                            <CardPinkRibbon
                                                key={`recommended-tracks-content-${track.id + Math.random() * 1000}`}
                                                id={track.id}
                                                image={track.album.images[0].url}
                                                name={track.name}
                                                type="track"
                                            />
                                        )}
                                    </>
                                );
                            })}
                        </Carousel>
                    </>
                </div>
            </div>
        </article>
    );
};

export default Content;
