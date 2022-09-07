import { useState, useEffect } from "react";
import GridLarge from "../components/common/GridLarge";
import CardRibbon from "../components/common/cards/CardRibbon";
import Cateogory from "../components/common/Cateogory";
import GridTitle from "../components/common/GridTitle";
import Artists from "../models/Artists";
import { handleSorting } from "../utils/helpers";

interface BrowseProps {
    relatedArtists: Artists[];
}

const Browse = ({ relatedArtists }: BrowseProps): JSX.Element => {
    const [datas, setDatas] = useState<Artists[]>([]);
    const [sorting, setSorting] = useState<string>("");

    const sortChange = (e: string) => {
        setSorting(e);
    };

    useEffect(() => {
        setDatas(relatedArtists);
    }, [datas, relatedArtists]);

    useEffect(() => {
        const sortedData = handleSorting(sorting, relatedArtists);
        sortedData && setDatas([...sortedData]);
    }, [sorting]);

    return (
        <section className="c-radio w-full pt-14 pb-10 md:pt-0 desktop:pt-8 desktop:pl-8 mb-56 flex justify-between flex-wrap">
            <div className="w-full mb-8">
                <GridTitle title="Related EDM Artists" badge={false} />
                <Cateogory onSortChange={(e) => sortChange(e)} />

                <GridLarge>
                    <>
                        {datas &&
                            datas.map((artist, index) => {
                                return (
                                    index < 18 && (
                                        <CardRibbon
                                            id={artist.id}
                                            key={`recommendedTracks-track-item-${index}`}
                                            image={artist.images[0].url}
                                            title={artist.name}
                                            readMore={false}
                                            type="artist"
                                        />
                                    )
                                );
                            })}
                    </>
                </GridLarge>
            </div>
        </section>
    );
};

export default Browse;
