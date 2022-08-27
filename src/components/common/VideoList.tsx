interface VideoItem {
    url: string;
    title: string;
    id: number;
}

interface VideoListProps {
    videos: VideoItem[];
    onChangeVideo: (e: number) => void;
}

const VideoList = ({ videos, onChangeVideo }: VideoListProps): JSX.Element => {
    return (
        <div className="w-full mt-6 bg-dark rounded">
            {videos.map((video, index) => {
                return (
                    <div
                        onClick={() => onChangeVideo(video.id)}
                        key={`video-list-items${index}`}
                        className="w-full h-16 flex justify-start items-center hover:bg-accent cursor-pointer transition duration-150 ease-out border-b border-gray-500"
                    >
                        <h5 className="text-white ml-4 capitalize">{video.title}</h5>
                    </div>
                );
            })}
        </div>
    );
};

export default VideoList;
