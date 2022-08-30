import { TrackImages } from "./FeaturedPlayLists";

export default interface SongCategory {
    playlists: {
        items: SongCategoryItems[];
    };
}

interface SongCategoryItems {
    id: string;
    name: string;
    description: string;
    images: TrackImages[];
}
