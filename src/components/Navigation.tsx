import { navigation } from "../navigation/Navigator";
import { Icon } from "@iconify/react";

interface SidebarProps {
    asideToggle: boolean;
}

export const Navigation = ({ asideToggle }: SidebarProps): JSX.Element => {
    return (
        <aside
            className={`${
                asideToggle && "hidden"
            } w-full md:w-14 h-12 md:h-screen bg-dark md:bg-dark justify-between fixed z-50 top-0 left-0 flex md:flex-wrap content-start`}
        >
            <div className="c-aside__logo md:w-full h-14 flex justify-center items-center ml-2 md:ml-0">
                <span className="text-white text-h2">N</span>
            </div>

            <div className="w-max md:w-full mr-2 md:mr-0">
                <ul className="c-nav flex flex-wrap md:flex-col mt-4 md:mr-0">
                    {navigation.map((item) => (
                        <li
                            className="c-nav__item md:w-full md:h-14 flex justify-center items-center ml-4 md:ml-0 relative z-50"
                            key={item.url}
                        >
                            <a className="c-nav__item-link" href={item.url}>
                                <Icon className="c-nav__icon text-accent text-h3" icon={item.icon} />
                            </a>

                            {item.children && (
                                <ul className="c-nav__child-list absolute -right-full z-40 hidden">
                                    {item.children.map((child) => {
                                        return (
                                            <li key={child.name} className="c-nav__child-item bg-accent  py-4 px-4">
                                                <a
                                                    className="c-nav__child-item-link capitalize text-white"
                                                    href={child.url}
                                                >
                                                    {child.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};
