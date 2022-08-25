import axios from "axios";
import FeaturedPlayLists from "../models/FeaturedPlayLists";

class SpotifyServices {
    http = axios.create({
        baseURL: "https://api.spotify.com/v1/",
    });

    getFeaturedPlayList = async (token: string) => {
        const { data } = await this.http.get<FeaturedPlayLists>("/playlists/0tx9dKlMbMMyxSxt7yexXX", {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        console.log(data);

        return data;
    };

    CLIENT_ID = "96757c15e2c14a3d8b9e199048d02fbc";
    REDIRECT_URI = "http://localhost:3000";
    AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    RESPONSE_TYPE = "token";
}

export default new SpotifyServices();
