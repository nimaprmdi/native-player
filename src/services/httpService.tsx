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

    if (error.response.status === 400) {
      toast.error("Bad Request - The request could not be understood by the server");
    } else if (error.response.status === 401) {
      toast.error("Unauthorized - The request requires user authentication");
    } else if (error.response.status === 403) {
      toast.error("Forbidden - The server understood the request, but is refusing to fulfill it.");
    } else if (error.response.status === 404) {
      toast.error("Not Found - The requested resource could not be found.");
    } else if (error.response.status === 429) {
      toast.error("Too Many Requests");
    } else {
      toast.error(error.message);
    }

    window.localStorage.removeItem("token");

    if (window.location.pathname !== "/login") {
      // window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default {
  get: axsiosSpotifyInstance.get,
  post: axsiosSpotifyInstance.post,
  put: axsiosSpotifyInstance.put,
  delete: axsiosSpotifyInstance.delete,
};
