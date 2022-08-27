import { useMemo, useRef, useState, useEffect } from "react";
import Plyr, { APITypes } from "plyr-react";
import VideoList from "./VideoList";
import { idMaker } from "../../utils/helpers";

interface Videos {
    url: string;
    title: string;
    id: number;
}

const Video = () => {
    const [selectedVideo, setSelectedVideo] = useState<number>(0);
    const [videos, setVideos] = useState<Videos[]>([
        {
            id: 0,
            url: "https://nimapm.ir/videos/escape.mp4",
            title: "Kx5 - Escape (feat. Hayla) [Official Lyric Video]",
        },
        {
            id: 1,
            url: "https://nimapm.ir/videos/deadmau5-pomegranet.mp4",
            title: "deadmau5 & The Neptunes - Pomegranate (Official Music Video)",
        },
        {
            id: 2,
            url: "http://nimapourmohammadi.com/wp-content/uploads/2022/08/tiesto.mp4",
            title: "Tiësto & Charli XCX - Hot In It",
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
                            src: videos[selectedVideo].url,
                            provider: "html5",
                        },
                    ],
                }}
            />
        );
    }, [selectedVideo]);

    return (
        <>
            {video}
            <VideoList videos={videos} onChangeVideo={(e) => setSelectedVideo(e)} />
        </>
    );
};

export default Video;
