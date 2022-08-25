import { TrackImages } from "./FeaturedPlayLists";

export default interface FeaturedAlbums {
    albums: AlbumItem[];
}

export interface AlbumItem {
    artist: { name: string };
    id: string;
    images: TrackImages[];
    name: string;
    tracks: AlbumItems[];
}

export interface AlbumItems {
    id: string;
    name: string;
    preview_url: string;
    artists: { name: string };
}
