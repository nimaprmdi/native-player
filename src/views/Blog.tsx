import { useRef, useMemo } from "react";
import Plyr, { APITypes } from "plyr-react";
import CardWide from "../components/common/cards/CardWide";
import Pagination from "../components/common/Pagination";
import Sidebar from "../components/common/Sidebar";
import VideoCategory from "../components/common/VideoCategory";
import Advertise from "../components/common/Advertise";
import Plans from "../components/common/Plans";

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
        <section className="c-home w-full pt-14 pb-40 md:pt-0 desktop:pt-8 desktop:pl-8 mb-56 flex justify-between flex-wrap">
            <div className="w-full desktop:w-8/12">
                <h1 className="text-h1 mb-8">Our Blogs</h1>
                <CardWide />
                <CardWide />
            </div>

            <div className="w-full desktop:w-4/12">
                <Sidebar>
                    <div className="w-full h-full bg-dark">{video}</div>
                    <VideoCategory />
                    <Advertise />
                    <Plans />
                </Sidebar>
            </div>

            <div className="w-full desktop:w-max">
                <Pagination />
            </div>
        </section>
    );
};

export default Blog;
