export default interface FeaturedPlayLists {
    name: string;
    tracks: {
        items: TrackItems[];
    };
}

export interface TrackItems {
    track: {
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
    };
}

export interface TrackImages {
    url: string;
}
