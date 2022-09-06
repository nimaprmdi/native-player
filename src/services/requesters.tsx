import Recommendation from "../models/Recommendation";
import spotifyService from "../services/SpotifyServices";
import SongCategory from "../models/SongCategory";
import FeaturedPlayLists from "../models/FeaturedPlayLists";
import FeaturedAlbums from "../models/FeturedAlbums";
import { ArtitstsObj } from "../models/Artists";

const getRecommendedTracks = async (token: string, setRecommendedTracks: (data: Recommendation) => void) => {
    const recommendedTracksLocal = await spotifyService.getRecommendedTracks(token);

    setRecommendedTracks(recommendedTracksLocal.data);
};

const getPlayListsByCats = async (
    token: string,

    setPlayListsByCats: (data: SongCategory) => void
) => {
    const topItems = await spotifyService.getPlayListsByCat(token);

    setPlayListsByCats(topItems.data);
};

const getFeaturedAlbums = async (
    token: string,

    setFeaturedAlbums: (data: FeaturedAlbums) => void
) => {
    const featuredAlbums = await spotifyService.getFeaturedAlbums(token);

    setFeaturedAlbums(featuredAlbums.data);
};

const getFeaturedPlayList = async (
    token: string,

    setFeaturedPlayList: (data: FeaturedPlayLists) => void
) => {
    const featuredPlayList = await spotifyService.getFeaturedPlayList(token);
    setFeaturedPlayList(featuredPlayList.data);
};

const getRelatedArtists = async (
    token: string,

    setRelatedArtists: (data: ArtitstsObj) => void
) => {
    const relatedArtists = await spotifyService.getRelatedArtists(token);
    setRelatedArtists(relatedArtists.data);
};

export { getRecommendedTracks, getPlayListsByCats, getFeaturedAlbums, getFeaturedPlayList, getRelatedArtists };
