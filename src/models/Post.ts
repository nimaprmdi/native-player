import { AlbumItems } from "./FeturedAlbums";
import Artists from "./Artists";

export default interface Post {
    id: string;
    preview_url: string;
    name: string;
    uri: string;
    album: AlbumItems;
    artists: Artists[];
    duration_ms: number;
    type: string;
}
