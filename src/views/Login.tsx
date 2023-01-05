import spotifyService from "../services/SpotifyServices";

const Login = () => {
    return (
        <section className="w-full h-52 flex justify-center items-center min-h-screen">
            <div className="w-full text-center flex justify-center flex-wrap mt-0">
                <h1 className="text-h1 md:text-text-huge w-full leading-10 mt-0">Please Login To Spotify</h1>

                <div className="w-full flex justify-center">
                    <p className="w-4/5 desktop:w-2/5 text-h4 leading-8">To use this project you have to login to your spotify account.</p>
                </div>

                <a
                    className="o-btn items-center mr-2 md:mr-8 flex o-btn--ghost mt-8 capitalize"
                    href={`${spotifyService.AUTH_ENDPOINT}?client_id=${spotifyService.CLIENT_ID}&redirect_uri=${spotifyService.REDIRECT_URI}&response_type=${spotifyService.RESPONSE_TYPE}`}
                >
                    Login to spotify
                </a>
            </div>
        </section>
    );
};

export default Login;
