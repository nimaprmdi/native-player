const Cateogory = () => {
    return (
        <div className="c-category w-full px-2 desktop:px-0">
            <div className="c-category__container w-full flex justify-start items-center">
                <ul className="c-category__list w-full flex flex-wrap gap-4">
                    <li className="c-category__item  w-max px-2 py-2 rounded-lg">
                        <a className="a--secondary px-2 py-2" href="#">
                            English
                        </a>
                    </li>

                    <li className="c-category__item  w-max px-2 py-2 rounded-lg">
                        <a className="a--secondary px-2 py-2" href="#">
                            English
                        </a>
                    </li>

                    <li className="c-category__item  w-max px-2 py-2 rounded-lg">
                        <a className="a--secondary px-2 py-2" href="#">
                            English
                        </a>
                    </li>

                    <li className="c-category__item  w-max px-2 py-2 rounded-lg">
                        <a className="a--secondary px-2 py-2" href="#">
                            English
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Cateogory;
