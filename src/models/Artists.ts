import { TrackImages } from "./FeaturedPlayLists";

export interface ArtitstsObj {
    artists: Artists[];
}

export default interface Artists {
    id: string;
    images: ArtistImages[];
    name?: string;
    uri?: string;
    href: string;
    genres?: string | string[];
    external_urls?: { spotify: string };
}

interface ArtistImages {
    url: string;
}

export interface ArtistTopSongs {
    tracks: ArtistsTopSongsItems[];
}

interface ArtistsTopSongsItems {
    album: {
        id: string;
        images: TrackImages[];
        name: string;
    };
    id: string;
    name: string;
    artists: {
        name: string;
    };
}
