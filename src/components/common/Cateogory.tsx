interface CategoryProps {
    onSortChange: (e: string) => void;
}

const Cateogory = ({ onSortChange }: CategoryProps) => {
    return (
        <div className="c-category w-full px-2 desktop:px-0">
            <div className="c-category__container w-full flex justify-start items-center">
                <ul className="c-category__list w-full flex flex-wrap gap-4">
                    <li className="c-category__item">
                        <button
                            onClick={(e) => onSortChange("a-to-z")}
                            className="a--secondary capitalize  o-btn o-btn--ghost px-2 py-2"
                        >
                            a to z
                        </button>
                    </li>

                    <li className="c-category__item">
                        <button
                            className="a--secondary capitalize  o-btn o-btn--ghost px-2 py-2"
                            onClick={(e) => onSortChange("z-to-a")}
                        >
                            z to a
                        </button>
                    </li>

                    <li className="c-category__item">
                        <button
                            className="a--secondary capitalize  o-btn o-btn--ghost px-2 py-2"
                            onClick={(e) => onSortChange("random")}
                        >
                            random
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Cateogory;
