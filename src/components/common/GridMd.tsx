import React from "react";
import CardCaption from "./cards/CardCaption";
import GridTitle from "./GridTitle";

interface GridMdProps {
    children?: JSX.Element | JSX.Element[];
}

const GridMd = ({ children }: GridMdProps): JSX.Element => {
    return (
        <section className="c-card px-2 desktop:px-0 desktop:w-full grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 gap-4 my-6 overflow-auto">
            {children}
        </section>
    );
};

export default GridMd;
