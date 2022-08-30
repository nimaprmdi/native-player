import { useState, useEffect } from "react";
import CardWide from "../components/common/cards/CardWide";
import Sidebar from "../components/common/Sidebar";
import GridTitle from "../components/common/GridTitle";
import Carousel from "../components/common/Carousel";
import Advertise from "../components/common/Advertise";
import Plans from "../components/common/Plans";
import Content from "../components/Content";
import Video from "../components/common/Video";
import CardPinkRibbon from "../components/common/cards/CardPinkRibbon";
import post_img from "../assets/images/blog/blog1.jpg";
import { useParams } from "react-router-dom";
import spotifyServices from "../services/SpotifyServices";
import Post from "../models/Post";

interface SingleProps {
    token: string;
}

export default function Single({ token }: SingleProps): JSX.Element {
    const [isLoaded, setIsLoaded] = useState(false);

    const [post, setPost] = useState<Post>({
        id: "",
        preview_url: "",
        name: "",
        uri: "",
        album: {
            id: "",
            preview_url: "",
            name: "",
            images: [],
            artists: { id: "", name: "", external_urls: { spotify: "" } },
        },
        artists: [],
        duration_ms: 0,
        type: "",
    });
    const { id } = useParams();

    const getTrack = async () => {
        const track = await spotifyServices.getTrackById(token, id!);
        setPost(track);
    };

    useEffect(() => {
        token && getTrack();
    }, [token]);

    return (
        <section className="c-home w-full desktop:mt-10 pb-24 desktop:pb-40 pt-20 md:pt-8 desktop:pt-8 desktop:px-8 desktop:mb-56 flex justify-between flex-wrap">
            <div className="w-full desktop:w-4/12 px-2 desktop:px-0 order-2 desktop:order-1">
                <Sidebar>
                    <>
                        <img
                            className={`w-full h-72 bg-accent rounded object-cover ${isLoaded ? "block" : "hidden"}`}
                            src={post && post.album.images[0]?.url}
                            alt="post pic"
                            onLoad={() => setIsLoaded(true)}
                        />

                        {!isLoaded && <div className="c-card__loader w-full  h-72 before:h-72 relative"></div>}
                    </>

                    <GridTitle title="New Videos" customClass="mt-8" readMore={false} badge={false} />

                    <Video />
                    <Advertise />
                    <Plans />
                </Sidebar>
            </div>

            <div className="w-full desktop:w-8/12 order-1 desktop:order-2">
                <Content postData={post && post} />
            </div>

            <div className="w-full order-3 desktop:order-3">
                <GridTitle title="New Releases" customClass="mt-6" readMore={false} />

                <Carousel>
                    {/* <CardPinkRibbon />
                    <CardPinkRibbon /> */}
                </Carousel>
            </div>
        </section>
    );
}
