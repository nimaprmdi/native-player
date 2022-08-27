export default interface Artists {
    id: string;
    images: ArtistProps[];
    name?: string;
    uri?: string;
    href: string;
}

interface ArtistProps {
    url: string;
}
