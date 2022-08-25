import { useEffect, useState } from "react";
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
import spotifyService from "../services/SpotifyServices";
import Recommendation from "../models/Recommendation";
import SongCategory from "../models/SongCategory";
import FeaturedAlbums from "../models/FeturedAlbums";
import CardRibbon from "../components/common/cards/CardRibbon";
import Card from "../components/common/cards/Card";

interface HomeProps {
    video?: JSX.Element;
    token: string;
}

const Home = ({ video, token }: HomeProps): JSX.Element => {
    const [recommendedTracks, setRecommendedTracks] = useState<Recommendation>({ tracks: [] });
    const [playListsByCats, setPlayListsByCats] = useState<SongCategory>({ playlists: { items: [] } });
    const [featuredAlbums, setFeaturedAlbums] = useState<FeaturedAlbums>({ albums: [] });

    const getRecommendedTracks = async () => {
        const recommendedTracksLocal = await spotifyService.getRecommendedTracks(token);
        setRecommendedTracks(recommendedTracksLocal);
    };

    const getPlayListsByCats = async () => {
        const topItems = await spotifyService.getPlayListsByCat(token);
        setPlayListsByCats(topItems);
    };

    const getFeaturedAlbums = async () => {
        const featuredAlbums = await spotifyService.getFeaturedAlbums(token);
        setFeaturedAlbums(featuredAlbums);
    };

    useEffect(() => {
        token && getRecommendedTracks();
        token && getPlayListsByCats();
        token && getFeaturedAlbums();
    }, [token]);

    return (
        <section className="c-home w-full pt-14 pb-40 md:pt-0 desktop:pt-8 desktop:pl-8 mb-56 flex justify-between flex-wrap">
            <div className="w-full desktop:w-3/5 mt-">
                <Slider token={token} />
                <GridTitle title="Recommended Songs" customClass="mt-16" />

                <GridMd>
                    <>
                        {recommendedTracks.tracks.map((track, index) => {
                            return (
                                index < 4 && (
                                    <CardCaption
                                        key={`recommendedTracks-track-item-${index}`}
                                        image={track.album.images[0].url}
                                    />
                                )
                            );
                        })}
                    </>
                </GridMd>

                <GridTitle title="Related Playlists" customClass="mt-12" />

                <GridMd>
                    <>
                        {playListsByCats &&
                            playListsByCats.playlists.items.map((item, index) => {
                                return (
                                    index < 4 && (
                                        <CardCaption
                                            key={`recommendedTracks-track-item-${index}`}
                                            image={item.images[0].url}
                                        />
                                    )
                                );
                            })}
                    </>
                </GridMd>
            </div>
            <div className="w-full desktop:w-2/5">
                <Sidebar className="pl-8">
                    <div className="w-full h-full bg-dark">{video}</div>

                    <VideoCategory />
                    <Advertise />
                    <Plans />
                </Sidebar>
            </div>

            <div className="w-full">
                <GridTitle title="Featured Albums" customClass="mt-6" />

                <Carousel>
                    {featuredAlbums.albums.map((album, index) => {
                        return (
                            <CardPinkRibbon
                                key={`Featured-Albums-${index}`}
                                image={album.images[0].url}
                                title={album.name}
                            />
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default Home;
