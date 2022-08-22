import Card from "../components/common/cards/Card";
import Carousel from "../components/common/Carousel";
import GridLarge from "../components/common/GridLarge";
import CardRibbon from "../components/common/cards/CardRibbon";
import Cateogory from "../components/common/Cateogory";
import GridTitle from "../components/common/GridTitle";
import CardPinkRibbon from "../components/common/cards/CardPinkRibbon";

const Radio = (): JSX.Element => {
    return (
        <section className="c-radio w-full pt-14 pb-40 md:pt-0 desktop:pt-8 desktop:pl-8 mb-56 flex justify-between flex-wrap">
            <div className="w-full mb-8">
                <GridTitle />
                <Cateogory />

                <GridLarge>
                    <CardRibbon />
                </GridLarge>
            </div>

            <div className="w-full">
                <GridTitle />

                <GridLarge>
                    <Card />
                </GridLarge>
            </div>

            <div className="w-full">
                <Carousel>
                    <CardPinkRibbon />
                    <CardPinkRibbon />
                    <CardPinkRibbon />
                    <CardPinkRibbon />
                </Carousel>
            </div>
        </section>
    );
};

export default Radio;
