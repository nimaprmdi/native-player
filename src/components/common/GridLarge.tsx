interface GridLargeProps {
    children: JSX.Element | JSX.Element[];
}

const GridLarge = ({ children }: GridLargeProps): JSX.Element => {
    return (
        <section className="w-full px-2 desktop:px-0 desktop:pr-8 mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-6 gap-4">{children}</div>
        </section>
    );
};

export default GridLarge;
