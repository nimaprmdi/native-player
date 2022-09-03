import { useState, useEffect } from "react";
import Sidebar from "../components/common/Sidebar";
import GridTitle from "../components/common/GridTitle";
import Advertise from "../components/common/Advertise";
import Plans from "../components/common/Plans";
import Content from "../components/Content";
import Video from "../components/common/Video";
import spotifyServices from "../services/SpotifyServices";
import { useSearchParams } from "react-router-dom";
import Post from "../models/Post";

interface SingleProps {
    token: string;

    setCurrentMusic: (e: string) => void;
}

export default function Single({ token, setCurrentMusic }: SingleProps): JSX.Element {
    const [post, setPost] = useState<Post>({
        id: "",
        preview_url: "",
        name: "",
        uri: "",
        type: "",
        release_date: "",
        total_tracks: 0,
        label: "",
        genres: [],
    });
    const [isLoaded, setIsLoaded] = useState(false);
    const [params, setParams] = useSearchParams();

    const id = params.get("id");
    const type = params.get("type");

    useEffect(() => {
        token && getTrack();
    }, [token, id, type]);

    const getTrack = async () => {
        const track = await spotifyServices.getObjectById(token, id!, type!);
        setPost(track);
    };

    return (
        <section className="c-home w-full desktop:mt-10 pb-24 desktop:pb-10 pt-20 md:pt-8 desktop:pt-8 desktop:px-8 desktop:mb-56 flex justify-between flex-wrap">
            <div className="w-full desktop:w-4/12 px-2 desktop:px-0 order-2 desktop:order-1">
                <Sidebar>
                    <>
                        <img
                            className={`w-full h-max bg-accent rounded object-cover ${isLoaded ? "block" : "hidden"}`}
                            src={
                                post && type === "track"
                                    ? post.album?.images[0]?.url
                                    : post.images && post.images[0].url
                            }
                            alt="post pic"
                            onLoad={() => setIsLoaded(true)}
                        />

                        {!isLoaded && (
                            <div className="c-card__loader w-full h-96 before:h-96 relative before:rounded"></div>
                        )}
                    </>
                    <GridTitle title="New Videos" customClass="mt-8" readMore={false} badge={false} />
                    <Video />
                    <Advertise />
                    <Plans />
                </Sidebar>
            </div>

            <div className="w-full desktop:w-8/12 order-1 desktop:order-2">
                <Content type={type!} postData={post && post} handlePlay={setCurrentMusic} />
            </div>
        </section>
    );
}
