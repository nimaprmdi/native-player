import album_cover from "../../assets/images/releases/album-cover.png";

interface TopSongsProps {
    className?: string;
}

const TopSongs = ({ className }: TopSongsProps) => {
    const currentDate = new Date();

    return (
        <div className={`w-full ${className}`}>
            <h3 className="text-h2">Recent Posts</h3>

            <div className="w-full">
                <ul className="w-full mt-4 rounded border border-gray-300 border-b-0">
                    <li className="py-4 px-4 hover:bg-gray-300 ease-in duration-150 cursor-pointer border-b border-gray-300 flex justify-start">
                        <img className="w-28 h-28 rounded" src={process.env.PUBLIC_URL + album_cover} alt={"album cover"} />
                        <div className="flex justify-start flex-wrap w-full content-start ml-4">
                            Taylor Swift – Shake It Off
                            <span className="text-text-tiny text-gray-400 block w-full mt-2">{currentDate.toDateString()}</span>
                        </div>
                    </li>
                    <li className="py-4 px-4 hover:bg-gray-300 ease-in duration-150 cursor-pointer border-b border-gray-300 flex justify-start">
                        <img className="w-28 h-28 rounded" src={process.env.PUBLIC_URL + album_cover} alt={"album cover"} />
                        <div className="flex justify-start flex-wrap w-full content-start ml-4">
                            Taylor Swift – Shake It Off
                            <span className="text-text-tiny text-gray-400 block w-full mt-2">{currentDate.toDateString()}</span>
                        </div>
                    </li>
                    <li className="py-4 px-4 hover:bg-gray-300 ease-in duration-150 cursor-pointer border-b border-gray-300 flex justify-start">
                        <img className="w-28 h-28 rounded" src={process.env.PUBLIC_URL + album_cover} alt={"album cover"} />
                        <div className="flex justify-start flex-wrap w-full content-start ml-4">
                            Taylor Swift – Shake It Off
                            <span className="text-text-tiny text-gray-400 block w-full mt-2">{currentDate.toDateString()}</span>
                        </div>
                    </li>
                    <li className="py-4 px-4 hover:bg-gray-300 ease-in duration-150 cursor-pointer border-b border-gray-300 flex justify-start">
                        <img className="w-28 h-28 rounded" src={process.env.PUBLIC_URL + album_cover} alt={"album cover"} />
                        <div className="flex justify-start flex-wrap w-full content-start ml-4">
                            Taylor Swift – Shake It Off
                            <span className="text-text-tiny text-gray-400 block w-full mt-2">{currentDate.toDateString()}</span>
                        </div>
                    </li>
                    <li className="py-4 px-4 hover:bg-gray-300 ease-in duration-150 cursor-pointer border-b border-gray-300 flex justify-start">
                        <img className="w-28 h-28 rounded" src={process.env.PUBLIC_URL + album_cover} alt={"album cover"} />
                        <div className="flex justify-start flex-wrap w-full content-start ml-4">
                            Taylor Swift – Shake It Off
                            <span className="text-text-tiny text-gray-400 block w-full mt-2">{currentDate.toDateString()}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopSongs;
