import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

const axsiosSpotifyInstance = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

axsiosSpotifyInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
        if (!expectedError) {
            toast.error("An unexpected error occurrred.");
        }

        toast.error(error.message);
        return Promise.reject(error);
    }
);

export default {
    get: axsiosSpotifyInstance.get,
    post: axsiosSpotifyInstance.post,
    put: axsiosSpotifyInstance.put,
    delete: axsiosSpotifyInstance.delete,
};
