import { useMemo, useRef, useState, useEffect } from "react";
import Plyr, { APITypes } from "plyr-react";

interface AudioProps {
    url: string;
    title: string;
    id: number;
}

interface Audios {
    url: string;
    title: string;
    id: number;
}

const Audio = (): JSX.Element => {
    const [selectedAudio, setSelectedVideo] = useState<number>(0);
    const [audios, setAudios] = useState<Audios[]>([
        {
            id: 0,
            url: "http://nimapourmohammadi.com/wp-content/uploads/2022/08/amb_bigfoot_backing_part_02_06.mp3",
            title: "Kx5 - Escape (feat. Hayla) [Official Lyric Video]",
        },
        {
            id: 1,
            url: "http://nimapourmohammadi.com/wp-content/uploads/2022/08/amb_bigfoot_backing_part_02_06.mp3",
            title: "deadmau5 & The Neptunes - Pomegranate (Official Music Video)",
        },
        {
            id: 2,
            url: "http://nimapourmohammadi.com/wp-content/uploads/2022/08/amb_bigfoot_backing_part_02_06.mp3",
            title: "Tiësto & Charli XCX - Hot In It",
        },
    ]);

    const ref = useRef<APITypes>(null);

    const audio = useMemo(() => {
        return (
            <Plyr
                ref={ref}
                source={{
                    type: "audio",
                    sources: [
                        {
                            src: audios[selectedAudio].url,
                            provider: "html5",
                        },
                    ],
                }}
            />
        );
    }, [selectedAudio]);

    return audio;
};

export default Audio;
