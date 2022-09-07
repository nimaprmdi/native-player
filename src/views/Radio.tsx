import { useState, useEffect } from "react";
import Card from "../components/common/cards/Card";
import Carousel from "../components/common/Carousel";
import GridLarge from "../components/common/GridLarge";
import CardRibbon from "../components/common/cards/CardRibbon";
import Cateogory from "../components/common/Cateogory";
import GridTitle from "../components/common/GridTitle";
import CardPinkRibbon from "../components/common/cards/CardPinkRibbon";
import Recommendation from "../models/Recommendation";
import SongCategory from "../models/SongCategory";
import FeaturedAlbums from "../models/FeturedAlbums";
import { handleSorting } from "../utils/helpers";

interface RadioProps {
    recommendedTracks: Recommendation;
    playListsByCats: SongCategory;
    featuredAlbums: FeaturedAlbums;
}

const Radio = ({ recommendedTracks, playListsByCats, featuredAlbums }: RadioProps): JSX.Element => {
    const [datas, setDatas] = useState<Recommendation>();
    const [sorting, setSorting] = useState<string>("");

    const sortChange = (e: string) => {
        setSorting(e);
    };

    useEffect(() => {
        setDatas(recommendedTracks);
    }, [datas, recommendedTracks]);

    useEffect(() => {
        const sortedData = handleSorting(sorting, datas?.tracks);
        sortedData && setDatas({ ...datas, tracks: sortedData });
    }, [sorting]);

    return (
        <section className="c-radio w-full pt-14 pb-10 md:pt-0 desktop:pt-8 desktop:pl-8 mb-56 flex justify-between flex-wrap">
            <div className="w-full mb-8">
                <GridTitle title="New Releases" customClass="pr-8" />

                <Cateogory onSortChange={(e) => sortChange(e)} />
                <GridLarge>
                    <>
                        {datas &&
                            datas.tracks.map((track, index) => {
                                return (
                                    <CardRibbon
                                        id={track.id}
                                        key={`recommendedTracks-track-item-${index}`}
                                        image={track.album.images[0].url}
                                        title={track.name}
                                        readMore={false}
                                        type="track"
                                    />
                                );
                            })}
                    </>
                </GridLarge>
            </div>

            <div className="w-full">
                <GridTitle title="New PlayLists" />

                <GridLarge>
                    <>
                        {playListsByCats &&
                            playListsByCats.playlists.items.map((playList) => {
                                return (
                                    <Card
                                        key={playList.id}
                                        id={playList.id}
                                        title={playList.name}
                                        image={playList.images[0].url}
                                        type="playlist"
                                    />
                                );
                            })}
                    </>
                </GridLarge>
            </div>

            <div className="w-full">
                <GridTitle title="New Releases" customClass="mt-6" />
                <Carousel classname="desktop:pr-10">
                    {featuredAlbums.albums.map((album, index) => {
                        return (
                            <CardPinkRibbon
                                id={album.id}
                                key={`Featured-Albums-${index}`}
                                image={album.images[0].url}
                                name={album.name}
                                type="album"
                            />
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default Radio;
