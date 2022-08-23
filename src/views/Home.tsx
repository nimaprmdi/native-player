import Carousel from "../components/common/Carousel";
import GridMd from "../components/common/GridMd";
import Sidebar from "../components/common/Sidebar";
import Slider from "../components/Slider";
import CardCaption from "../components/common/cards/CardCaption";
import CardPinkRibbon from "../components/common/cards/CardPinkRibbon";
import GridTitle from "../components/common/GridTitle";
import VideoCategory from "../components/common/VideoCategory";
import Advertise from "../components/common/Advertise";
import Plans from "../components/common/Plans";

interface HomeProps {
    video?: JSX.Element;
}

const Home = ({ video }: HomeProps): JSX.Element => {
    return (
        <section className="c-home w-full pt-14 pb-40 md:pt-0 desktop:pt-8 desktop:pl-8 mb-56 flex justify-between flex-wrap">
            <div className="w-full desktop:w-3/5 mt-">
                <Slider />

                <GridTitle title="New Releases" customClass="mt-16" />

                <GridMd>
                    <CardCaption />
                    <CardCaption />
                    <CardCaption />
                    <CardCaption />
                </GridMd>

                <GridTitle title="New Releases" customClass="mt-12" />

                <GridMd>
                    <CardCaption />
                    <CardCaption />
                    <CardCaption />
                </GridMd>
            </div>
            <div className="w-full desktop:w-2/5">
                <Sidebar>
                    <div className="w-full h-full bg-dark">{video}</div>

                    <VideoCategory />
                    <Advertise />
                    <Plans />
                </Sidebar>
            </div>

            <div className="w-full">
                <GridTitle title="New Releases" customClass="mt-6" />

                <Carousel>
                    <CardPinkRibbon />
                    <CardPinkRibbon />
                </Carousel>
            </div>
        </section>
    );
};

export default Home;
