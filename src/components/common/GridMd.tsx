import React from "react";
import CardCaption from "./cards/CardCaption";

interface GridMdProps {
    children?: JSX.Element | JSX.Element[];
}

const GridMd = ({ children }: GridMdProps): JSX.Element => {
    return (
        <section>
            <div className="w-full desktop:w-3/5 px-2 desktop:px-0 flex flex-wrap items-center justify-between mt-16">
                <div className="w-full md:w-max desktop:w-full flex items-center justify-start">
                    <h2 className="mr-2 text-h2">New Releases</h2>
                    <span className="c-badge">New</span>
                </div>

                <div className="mt-4 md:mt-0">
                    <a href="#">See All</a>
                </div>
            </div>

            <div className="c-card px-2 desktop:px-0 desktop:w-full grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 gap-4 my-6">
                {children}
            </div>
        </section>
    );
};

export default GridMd;
