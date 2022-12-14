import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Artists from "../models/Artists";
import spotifyService from "../services/SpotifyServices";
import SearchModal from "./common/SearchModal";
import GridMd from "./common/GridMd";
import CardCaption from "./common/cards/CardCaption";
import Audio from "../components/common/Audio";
import { APITypes } from "plyr-react";

interface HeaderProps {
    audioRef: React.RefObject<APITypes>;
    onAsideToggle: () => void;
    setSearchKey: (e: string) => void;
    setToken: (e: string) => void;
    searchKey: string;
    token: string;
    currentMusic: string;
}

const Header = ({ onAsideToggle, searchKey, setSearchKey, token, currentMusic, audioRef, setToken }: HeaderProps): JSX.Element => {
    const [artists, setArtists] = useState<Artists[]>([]);
    const [visibleModal, setVisibleModal] = useState(false);

    const renderArtist = () => {
        const artistSearch = artists.map((artist, index) => {
            return <CardCaption key={index} id={artist.id} readMore={false} name={artist.name ? artist.name : "Artist Picture"} image={artist.images.length > 0 ? artist.images[0].url : ""} type="artist" functional={() => setVisibleModal(false)} />;
        });

        return artistSearch;
    };

    const handleArtists = async (e: React.FormEvent) => {
        const artists = await spotifyService.searchArtist(e, token, searchKey);
        setArtists(artists.items);
    };

    const logout = () => {
        spotifyService.logOutSpotify(setToken);
        setToken("");
    };

    const handleClose = () => {
        setVisibleModal(!visibleModal);
        setArtists([]);
    };

    return (
        <>
            <header className="w-full h-16 bg-primary justify-center items-center fixed z-20 md:relative flex bottom-0">
                <div className="md:w-2/6 hidden md:block">
                    <button className="bg-black rounded-md hidden md:flex flex-wrap flex-col px-4 py-2 ml-1 md:ml-8" onClick={() => onAsideToggle()}>
                        <span className="w-5 h-0.252 bg-white block my-1 mx-0"></span>
                        <span className="w-5 h-0.252 bg-white block my-1 mx-0"></span>
                        <span className="w-5 h-0.252 bg-white block my-1 mx-0"></span>
                    </button>
                </div>
                <div className="md:w-2/3 desktop:w-2/6">
                    <Audio currentMusic={currentMusic} audioRef={audioRef} />
                </div>

                <div className="md:w-2/6 flex justify-end">
                    <button className="o-btn items-center mr-2 hidden md:flex o-btn--ghost p-1" onClick={() => setVisibleModal(true)}>
                        <Icon icon="bi:search" />
                    </button>

                    <>
                        {!token ? (
                            <>
                                <a className="o-btn items-center mr-2 md:mr-8 hidden md:flex o-btn--ghost" href={`${spotifyService.AUTH_ENDPOINT}?client_id=${spotifyService.CLIENT_ID}&redirect_uri=${spotifyService.REDIRECT_URI}&response_type=${spotifyService.RESPONSE_TYPE}`}>
                                    Login <Icon icon="ep:arrow-right" />
                                </a>
                            </>
                        ) : (
                            <button onClick={logout} className="items-center mr-2 md:mr-8 hidden md:flex o-btn--ghost">
                                Logout <Icon icon="ep:arrow-right" />
                            </button>
                        )}
                    </>
                </div>
            </header>

            {visibleModal && (
                <SearchModal>
                    {token ? (
                        <>
                            <form onSubmit={handleArtists}>
                                <div className="flex justify-between gap-4">
                                    <input className="my-1" type="text" onChange={(e) => setSearchKey(e.target.value)} />
                                    <button className="o-btn--secondary" type="submit">
                                        Search
                                    </button>

                                    <button className="o-btn" type="button" onClick={handleClose}>
                                        Close
                                    </button>
                                </div>
                            </form>

                            {artists.length > 0 && <GridMd className="gap-8 gap-y-12">{renderArtist()}</GridMd>}
                        </>
                    ) : (
                        <div className="flex w-full">
                            <h2 className="text-h3 my-4 w-full block">Please Login</h2>

                            <button className="o-btn" type="button" onClick={handleClose}>
                                Close
                            </button>
                        </div>
                    )}
                </SearchModal>
            )}
        </>
    );
};

export default Header;
