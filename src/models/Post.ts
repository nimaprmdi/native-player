import { AlbumItems } from "./FeturedAlbums";
import { TrackImages } from "./FeaturedPlayLists";
import Artists from "./Artists";

export default interface Post {
    id: string;
    preview_url: string;
    name: string;
    uri: string;
    album?: AlbumItems;
    artists?: Artists[];
    duration_ms?: number;
    type: string;
    images?: TrackImages[];
    external_urls?: { spotify: string };
    release_date: string;
    total_tracks: number;
    label: string;
    genres?: string[];
    followers?: { total: number };
}
