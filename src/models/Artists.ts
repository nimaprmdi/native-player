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
}

interface ArtistImages {
    url: string;
}
