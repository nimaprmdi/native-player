const GridTitle = () => {
    return (
        <div className="w-full px-2 desktop:px-0 flex flex-wrap md:flex-nowrap items-center justify-between mb-6">
            <div className="w-full md:w-max desktop:w-full flex items-center justify-start">
                <h2 className="mr-2 text-h2">New Releases</h2>
                <span className="c-badge">New</span>
            </div>

            <div className="mt-4 md:mt-0 w-max">
                <a href="#" className="block w-max">
                    See All
                </a>
            </div>
        </div>
    );
};

export default GridTitle;
