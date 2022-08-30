interface SearchModal {
    children?: JSX.Element | JSX.Element[];
}

const SearchModal = ({ children }: SearchModal) => {
    return (
        <div className="fixed top-0 z-40 w-full h-screen bg-black/80 flex justify-center items-center transition duration-300 ease-out ">
            <div className="w-3/5 max-h-147.5 -mt-16 bg-gray-300/90 rounded overflow-auto py-8 px-12 transition duration-300 ease-out ">
                <h2 className="text-h2 mb-4 ">Seacrh In Spotify</h2>
                {children}
            </div>
        </div>
    );
};

export default SearchModal;
