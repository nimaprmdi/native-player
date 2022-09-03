import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

interface SingleCardsProps {
    icon: string;
    title: string;
    btnText: string;
    url: string;
    isLink?: boolean;
    hasBtn?: boolean;
    functional?: () => void;
}

const SingleCards = ({ icon, title, btnText, url, isLink = false, hasBtn = true, functional }: SingleCardsProps) => {
    return (
        <>
            <div className="c-single-card w-full desktop:w-1/4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-dark dark:border-gray-700 py-10">
                <div className="flex flex-col items-center">
                    <Icon className="mb-3 w-24 h-24 text-white" icon={icon} />

                    <h5 className="capitalize mb-1 text-xl font-medium text-gray-900 dark:text-white mt-4">{title}</h5>

                    {hasBtn && (
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            {!functional ? (
                                isLink ? (
                                    <a
                                        href={url}
                                        target="_blank"
                                        className="capitalize inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-dark dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 hover:text-white"
                                    >
                                        {btnText}
                                    </a>
                                ) : (
                                    <Link
                                        to={url}
                                        className="capitalize inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-dark dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 hover:text-white"
                                    >
                                        {btnText}
                                    </Link>
                                )
                            ) : (
                                <button
                                    onClick={functional}
                                    className="capitalize inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-dark dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 hover:text-white"
                                >
                                    {btnText}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SingleCards;
