import Carousel from "../components/common/Carousel";
import GridMd from "../components/common/GridMd";
import Sidebar from "../components/common/Sidebar";
import Slider from "../components/Slider";
import CardCaption from "../components/common/cards/CardCaption";
import CardPinkRibbon from "../components/common/cards/CardPinkRibbon";
import GridTitle from "../components/common/GridTitle";
import Advertise from "../components/common/Advertise";
import Plans from "../components/common/Plans";
import Video from "../components/common/Video";
import Recommendation from "../models/Recommendation";
import SongCategory from "../models/SongCategory";
import FeaturedAlbums from "../models/FeturedAlbums";

interface HomeProps {
    recommendedTracks: Recommendation;
    playListsByCats: SongCategory;
    featuredAlbums: FeaturedAlbums;
}

const Home = ({ recommendedTracks, playListsByCats, featuredAlbums }: HomeProps): JSX.Element => {
    return (
        <section className="c-home w-full pt-14 pb-10 md:pt-0 desktop:pt-8 desktop:pl-8 mb-56 flex justify-between flex-wrap">
            <div className="w-full desktop:w-3/5">
                <Slider />

                <GridTitle title="Recommended Songs" customClass="mt-16" />
                <GridMd>
                    <>
                        {recommendedTracks.tracks.map((track, index) => {
                            return (
                                index < 4 && (
                                    <CardCaption
                                        id={track.id}
                                        type={track.type}
                                        key={`recommendedTracks-track-item-${index}`}
                                        image={track.album.images[0].url}
                                        name={track.name}
                                    />
                                )
                            );
                        })}
                    </>
                </GridMd>

                <GridTitle title="Related Playlists" customClass="mt-12" />
                <GridMd>
                    <>
                        {playListsByCats.playlists.items.map((playList, index) => {
                            return (
                                index < 4 && (
                                    <CardCaption
                                        id={playList.id}
                                        type={playList.type}
                                        key={`recommendedTracks-track-item-${index}`}
                                        image={playList.images[0].url}
                                        name={playList.name}
                                    />
                                )
                            );
                        })}
                    </>
                </GridMd>
            </div>

            <div className="w-full desktop:w-2/5">
                <Sidebar className="px-2 desktop:px-0 desktop:pl-8">
                    <Video />
                    <Advertise />
                    <Plans />
                </Sidebar>
            </div>

            <div className="w-full">
                <GridTitle title="Featured Albums" customClass="mt-10 pl-4 pr-12" />

                <Carousel classname="desktop:pr-10">
                    {featuredAlbums.albums.map((album, index) => {
                        return (
                            <CardPinkRibbon
                                id={album.id}
                                key={`Featured-Albums-${index}`}
                                image={album.images[0].url}
                                name={album.name}
                                type={"album"}
                            />
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default Home;
