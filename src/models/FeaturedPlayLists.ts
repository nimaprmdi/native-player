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
            images: {
                url: string[];
            };
            name: string;
        };
        id: string;
        name: string;
        artists: {
            name: string;
        };
    };
}
