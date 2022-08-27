import axios from "axios";
import FeaturedPlayLists from "../models/FeaturedPlayLists";
import Recommendation from "../models/Recommendation";
import SongCategory from "../models/SongCategory";

class SpotifyServices {
    http = axios.create({
        baseURL: "https://api.spotify.com/v1/",
    });

    private getHeaders = (token: string) => {
        return {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
    };

    getFeaturedPlayList = async (token: string) => {
        const { data } = await this.http.get<FeaturedPlayLists>("/playlists/1bAxUEAiPtRRMsnHbkz7vP", {
            headers: this.getHeaders(token),
        });
        return data;
    };

    getRecommendedTracks = async (token: string) => {
        const { data } = await this.http.get<Recommendation>("/recommendations", {
            headers: this.getHeaders(token),
            params: {
                seed_artists: "2CIMQHirSU0MQqyYHq0eOx",
                seed_genres: "edm_dance",
                seed_tracks: "7cbsuVHDGO1QWG15TUOOtp",
            },
        });
        return data;
    };

    getPlayListsByCat = async (token: string) => {
        const { data } = await this.http.get<SongCategory>("browse/categories/edm_dance/playlists", {
            headers: this.getHeaders(token),
            params: {
                limit: 10,
            },
        });
        return data;
    };

    getFeaturedAlbums = async (token: string) => {
        const { data } = await this.http.get("/albums", {
            headers: this.getHeaders(token),
            params: {
                ids: "4CJz7SiuYgxGPQSk4RMXBc,6CIslPQSknp875cigkhKJC,7wHRbv2KffwwK0sSZu7YI5,5YBZo3FqPKyuFKJcn8e7js,0nSJya8Yd1OXtXiQjkXZLO,5xjXARHTm4YSmQPDDFZO0W,3xp9A0kXzxqUztRASTjVD5,57bABnvvPfNhBQRI70dqlU,3yyMpOkLtbcbVJFzEESLN0,0MxnDPoKo4ohNSdnuZpIxg",
            },
        });

        return data;
    };

    logOutSpotify = (setToken: Function) => {
        setToken("");
        window.localStorage.removeItem("token");
    };

    searchArtist = async (e: React.FormEvent, token: string, searchKey: string, setArtists: Function) => {
        e.preventDefault();
        const { data } = await this.http.get("/search", {
            headers: this.getHeaders(token),
            params: {
                q: searchKey,
                type: "artist",
            },
        });

        setArtists(data.artists?.items);
    };

    CLIENT_ID = "96757c15e2c14a3d8b9e199048d02fbc";
    REDIRECT_URI = "http://localhost:3000";
    AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    RESPONSE_TYPE = "token";
}

export default new SpotifyServices();
