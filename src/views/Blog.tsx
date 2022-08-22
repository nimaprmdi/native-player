import { useRef, useMemo } from "react";
import Plyr, { APITypes } from "plyr-react";
import CardWide from "../components/common/cards/CardWide";
import Pagination from "../components/common/Pagination";
import Sidebar from "../components/common/Sidebar";
import RecentPosts from "../components/common/RecentPosts";
import TopSongs from "../components/common/TopSongs";

const Blog = () => {
    const ref = useRef<APITypes>(null);

    const video = useMemo(() => {
        return (
            <Plyr
                ref={ref}
                source={{
                    type: "video",
                    sources: [
                        {
                            src: "http://nimapourmohammadi.com/wp-content/uploads/2022/08/dodge-tool.mp4",
                            provider: "html5",
                        },
                    ],
                }}
            />
        );
    }, []);

    return (
        <section className="c-home w-full pt-14 pb-24 desktop:pb-40 md:pt-0 desktop:pt-8 desktop:pl-8 desktop:mb-56 flex justify-between flex-wrap">
            <div className="w-full desktop:w-8/12 order-1 desktop:order-1">
                <h1 className="text-h1 mb-8 px-2 desktop:px-0">Our Blogs</h1>
                <CardWide />
                <CardWide />
            </div>

            <div className="w-full desktop:w-4/12 order-3 desktop:order-2 mt-16 px-2 desktop:px-0">
                <Sidebar>
                    <RecentPosts />
                    <TopSongs className="mt-8" />
                </Sidebar>
            </div>

            <div className="w-full desktop:w-max order-2 desktop:order-3">
                <Pagination />
            </div>
        </section>
    );
};

export default Blog;
