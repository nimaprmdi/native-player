interface GridTitleProps {
    title: string;
    customClass?: string;
    readMore?: boolean;
    badge?: boolean;
}

const GridTitle = ({ title, customClass, readMore = true, badge = true }: GridTitleProps) => {
    return (
        <div className={`w-full flex flex-wrap md:flex-nowrap items-center justify-between mb-6 px-2 ${customClass}`}>
            <div className="w-full md:w-max desktop:w-full flex flex-wrap gap-4 items-center justify-start">
                <h2 className="mr-2 text-h2 leading-9">{title}</h2>

                {badge && <span className="c-badge">New</span>}
            </div>

            {readMore && (
                <div className="mt-4 md:mt-0 w-max">
                    <a href="#" className="block w-max">
                        See All
                    </a>
                </div>
            )}
        </div>
    );
};

export default GridTitle;
