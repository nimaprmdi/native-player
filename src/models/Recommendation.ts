import { TrackImages } from "./FeaturedPlayLists";

export default interface Recommendation {
    tracks: RecommendedTracks[];
}

export interface RecommendedTracks {
    id: string;
    type: string;
    name: string;
    preview_url: string;
    artists: { name: string };
    album: {
        images: TrackImages[];
    };
    owner: {
        display_name: string;
    };
}
