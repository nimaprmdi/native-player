const RecentPosts = () => {
    const currentDate = new Date();

    return (
        <div className="w-full mt-2">
            <h3 className="text-h2">Recent Posts</h3>

            <div className="w-full">
                <ul className="w-full mt-4 rounded border border-gray-300 border-b-0">
                    <li className="py-4 pl-6 hover:bg-gray-300 ease-in duration-150 cursor-pointer border-b border-gray-300">
                        Taylor Swift – Shake It Off
                        <span className="text-text-tiny text-gray-400 block w-full mt-2">
                            {currentDate.toDateString()}
                        </span>
                    </li>
                    <li className="py-4 pl-6 hover:bg-gray-300 ease-in duration-150 cursor-pointer border-b border-gray-300">
                        Taylor Swift – Shake It Off
                        <span className="text-text-tiny text-gray-400 block w-full mt-2">
                            {currentDate.toDateString()}
                        </span>
                    </li>
                    <li className="py-4 pl-6 hover:bg-gray-300 ease-in duration-150 cursor-pointer border-b border-gray-300">
                        Taylor Swift – Shake It Off
                        <span className="text-text-tiny text-gray-400 block w-full mt-2">
                            {currentDate.toDateString()}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RecentPosts;
