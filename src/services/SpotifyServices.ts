import { ArtitstsObj } from "../models/Artists";
import FeaturedPlayLists from "../models/FeaturedPlayLists";
import Recommendation from "../models/Recommendation";
import SongCategory from "../models/SongCategory";
import http from "./httpService";

class SpotifyServices {
    private getHeaders = (token: string) => {
        return {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
    };

    getFeaturedPlayList = async (token: string) => {
        const { data, status } = await http.get<FeaturedPlayLists>("/playlists/1bAxUEAiPtRRMsnHbkz7vP", {
            headers: this.getHeaders(token),
        });

        return { data, status };
    };

    getRecommendedTracks = async (token: string) => {
        const { data, status } = await http.get<Recommendation>("/recommendations", {
            headers: this.getHeaders(token),
            params: {
                seed_artists: "2CIMQHirSU0MQqyYHq0eOx",
                seed_genres: "edm_dance",
                seed_tracks: "7cbsuVHDGO1QWG15TUOOtp",
                limit: 24,
            },
        });
        return { data, status };
    };

    getPlayListsByCat = async (token: string) => {
        const { data, status } = await http.get<SongCategory>("browse/categories/edm_dance/playlists", {
            headers: this.getHeaders(token),
            params: {
                limit: 12,
            },
        });
        return { data, status };
    };

    getFeaturedAlbums = async (token: string) => {
        const { data, status } = await http.get("/albums", {
            headers: this.getHeaders(token),
            params: {
                ids: "4CJz7SiuYgxGPQSk4RMXBc,6CIslPQSknp875cigkhKJC,7wHRbv2KffwwK0sSZu7YI5,5YBZo3FqPKyuFKJcn8e7js,0nSJya8Yd1OXtXiQjkXZLO,5xjXARHTm4YSmQPDDFZO0W,3xp9A0kXzxqUztRASTjVD5,57bABnvvPfNhBQRI70dqlU,3yyMpOkLtbcbVJFzEESLN0,0MxnDPoKo4ohNSdnuZpIxg",
            },
        });

        return { data, status };
    };

    getRelatedArtists = async (token: string) => {
        const { data, status } = await http.get<ArtitstsObj>("/artists/2CIMQHirSU0MQqyYHq0eOx/related-artists", {
            headers: this.getHeaders(token),
        });
        return { data, status };
    };

    getArtistTopTracks = async (token: string, artistId: string) => {
        const { data, status } = await http.get(`/artists/${artistId}/top-tracks`, {
            headers: this.getHeaders(token),
            params: { market: "US" },
        });
        return { data, status };
    };

    getObjectById = async (token: string, objectId: string, type: string) => {
        let endPoint: string = "";
        switch (type) {
            case "album":
                endPoint = "/albums/";
                break;
            case "artist":
                endPoint = "/artists/";
                break;
            case "track":
                endPoint = "/tracks/";
                break;
            case "playlist":
                endPoint = "/playlists/";
                break;
            default:
                endPoint = "/tracks/";
                break;
        }
        const { data, status } = await http.get(`${endPoint}${objectId}`, {
            headers: this.getHeaders(token),
        });
        return { data, status };
    };

    searchArtist = async (e: React.FormEvent, token: string, searchKey: string) => {
        e.preventDefault();
        const { data, status } = await http.get("/search", {
            headers: this.getHeaders(token),
            params: {
                q: searchKey,
                type: "artist",
            },
        });

        return data.artists;
    };

    logOutSpotify = (setToken: Function) => {
        setToken("");
        window.localStorage.removeItem("token");
    };

    CLIENT_ID = "96757c15e2c14a3d8b9e199048d02fbc";
    REDIRECT_URI = "http://localhost:3000";
    AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    RESPONSE_TYPE = "token";
}

export default new SpotifyServices();
