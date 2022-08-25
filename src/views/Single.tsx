import CardWide from "../components/common/cards/CardWide";
import Sidebar from "../components/common/Sidebar";
import GridTitle from "../components/common/GridTitle";
import CardPinkRibbon from "../components/common/cards/CardPinkRibbon";
import Carousel from "../components/common/Carousel";
import post_img from "../assets/images/blog/blog1.jpg";
import VideoCategory from "../components/common/VideoCategory";
import Advertise from "../components/common/Advertise";
import Plans from "../components/common/Plans";
import Content from "../components/Content";

interface SingleProps {
    video?: JSX.Element;
}

export default function Single({ video }: SingleProps) {
    return (
        <section className="c-home w-full pb-24 desktop:pb-40 pt-20 md:pt-8 desktop:pt-8 desktop:px-8 desktop:mb-56 flex justify-between flex-wrap">
            <div className="w-full desktop:w-4/12 px-2 desktop:px-0 order-2 desktop:order-1">
                <Sidebar>
                    <img className="w-full h-72 bg-accent rounded object-cover" src={post_img} alt="post pic" />
                    <GridTitle title="New Videos" customClass="mt-8" readMore={false} badge={false} />
                    <div className="w-full h-full bg-dark mt-8">{video}</div>
                    <VideoCategory />
                    <Advertise />
                    <Plans />
                </Sidebar>
            </div>

            <div className="w-full desktop:w-8/12 order-1 desktop:order-2">
                <Content />
            </div>

            <div className="w-full order-3 desktop:order-3">
                <GridTitle title="New Releases" customClass="mt-6" readMore={false} />

                <Carousel>
                    {/* <CardPinkRibbon />
                    <CardPinkRibbon /> */}
                </Carousel>
            </div>
        </section>
    );
}
