import { useState } from "react";
import { Icon } from "@iconify/react";
import Artist from "../models/Artists";
import spotifyService from "../services/SpotifyServices";
import SearchModal from "./common/SearchModal";
import GridMd from "./common/GridMd";
import CardCaption from "./common/cards/CardCaption";
import SpotifyPlayer from "react-spotify-web-playback";

interface HeaderProps {
    onAsideToggle: () => void;
    logout: () => void;
    searchArtist: (e: React.FormEvent) => void;
    setSearchKey: (e: string) => void;
    setArtists: (artists: Artist[]) => void;
    token: string;
    audio?: JSX.Element;
    artists: Artist[];
}

const Header = ({
    onAsideToggle,
    logout,
    searchArtist,
    setSearchKey,
    setArtists,
    artists,
    token,
    audio,
}: HeaderProps): JSX.Element => {
    const [visibleModal, setVisibleModal] = useState(false);

    const renderArtist = () => {
        const artistSearch = artists.map((artist, index) => {
            return (
                // <div key={artist.id}>
                //     {artist.images.length ? (
                //         <img className="w-8 h-8" src={artist.images[0].url} alt="Image" />
                //     ) : (
                //         <div className="w-full h-full bg-accent">No Images</div>
                //     )}
                // </div>

                // <CardCaption key={index} />
                <></>
            );
        });

        return artistSearch;
    };

    const handleClose = () => {
        setVisibleModal(!visibleModal);
        setArtists([]);
    };

    return (
        <>
            <header className="w-full h-16 bg-primary justify-center items-center fixed z-20 md:relative flex bottom-0">
                <div className="md:w-2/6 hidden md:block">
                    <button
                        className="bg-black rounded-md hidden md:flex flex-wrap flex-col px-4 py-2 ml-1 md:ml-8"
                        onClick={() => onAsideToggle()}
                    >
                        <span className="w-5 h-0.252 bg-white block my-1 mx-0"></span>
                        <span className="w-5 h-0.252 bg-white block my-1 mx-0"></span>
                        <span className="w-5 h-0.252 bg-white block my-1 mx-0"></span>
                    </button>
                </div>
                <div className="md:w-2/3 desktop:w-2/6">{audio}</div>

                <div className="md:w-2/6 flex justify-end">
                    <button
                        className="o-btn items-center mr-2 hidden md:flex o-btn--ghost p-1"
                        onClick={() => setVisibleModal(true)}
                    >
                        <Icon icon="bi:search" />
                    </button>

                    <>
                        {!token ? (
                            <>
                                <a
                                    className="o-btn items-center mr-2 md:mr-8 hidden md:flex o-btn--ghost"
                                    href={`${spotifyService.AUTH_ENDPOINT}?client_id=${spotifyService.CLIENT_ID}&redirect_uri=${spotifyService.REDIRECT_URI}&response_type=${spotifyService.RESPONSE_TYPE}`}
                                >
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
                            <form onSubmit={searchArtist}>
                                <div className="flex justify-between gap-4">
                                    <input
                                        className="my-1"
                                        type="text"
                                        onChange={(e) => setSearchKey(e.target.value)}
                                    />
                                    <button className="o-btn--secondary" type="submit">
                                        Search
                                    </button>

                                    <button className="o-btn" type="button" onClick={handleClose}>
                                        Close
                                    </button>
                                </div>
                            </form>

                            {artists.length > 0 && <GridMd>{renderArtist()}</GridMd>}
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
