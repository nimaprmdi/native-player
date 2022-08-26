import { useMemo, useRef, useState } from "react";
import Plyr, { APITypes } from "plyr-react";
import VideoCategory from "./VideoCategory";
import { idMaker } from "../../utils/helpers";

interface Videos {
    url: string;
    title: string;
    id: number;
}

const Video = () => {
    const [selectedVideo, setSelectedVideo] = useState(1);
    const [videos, setVideos] = useState<Videos[]>([
        {
            id: 1,
            url: "https://youtu.be/BMFNN40fNp0",
            title: idMaker("Kx5 - Escape (feat. Hayla) [Official Lyric Video]"),
        },
        {
            id: 2,
            url: "https://youtu.be/aAvyS6HSa0A",
            title: idMaker("deadmau5 & The Neptunes - Pomegranate (Official Music Video)"),
        },
        {
            id: 3,
            url: "https://youtu.be/r0bhF7SJLYQ",
            title: idMaker("deadmau5 & The Neptunes - Pomegranate (Official Music Video)"),
        },
    ]);

    const ref = useRef<APITypes>(null);

    const video = useMemo(() => {
        return (
            <Plyr
                ref={ref}
                source={{
                    type: "video",
                    sources: [
                        {
                            src: videos[0].url,
                            provider: "youtube",
                        },
                    ],
                }}
            />
        );
    }, []);

    return (
        <>
            {video}
            <VideoCategory />
        </>
    );
};

export default Video;
