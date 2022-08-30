interface SidebarProps {
    className?: string;
    children?: JSX.Element[] | JSX.Element;
}

const Sidebar = ({ className, children }: SidebarProps): JSX.Element => {
    return <aside className={`c-sidebar w-full desktop:pr-10 ${className}`}>{children}</aside>;
};

export default Sidebar;
