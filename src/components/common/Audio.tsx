import { useMemo, useState, useEffect } from "react";
import Plyr, { APITypes } from "plyr-react";

interface AudioProps {
    currentMusic: string;
    audioRef: React.RefObject<APITypes>;
}

interface Audios {
    url: string;
    title: string;
    id: number;
}

const Audio = ({ currentMusic, audioRef }: AudioProps): JSX.Element => {
    const [selectedAudio, setSelectedVideo] = useState<number>(1);
    const [audios, setAudios] = useState<Audios[]>([
        {
            id: 0,
            url: currentMusic,
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

    const audio = useMemo(() => {
        return (
            <Plyr
                ref={audioRef}
                source={{
                    type: "audio",
                    sources: [
                        {
                            src: currentMusic,
                            provider: "html5",
                        },
                    ],
                }}
            />
        );
    }, [currentMusic]);

    useEffect(() => {}, [currentMusic]);

    return audio;
};

export default Audio;
