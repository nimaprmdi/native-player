interface SidebarProps {
    children?: JSX.Element[] | JSX.Element;
}

const Sidebar = ({ children }: SidebarProps): JSX.Element => {
    return <aside className="w-full desktop:pr-10 desktop:pl-6">{children}</aside>;
};

export default Sidebar;
