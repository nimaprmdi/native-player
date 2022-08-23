import { Icon } from "@iconify/react";

interface HeaderProps {
    onAsideToggle: () => void;
    audio?: JSX.Element;
}

const Header = ({ onAsideToggle, audio }: HeaderProps): JSX.Element => {
    return (
        <header className="w-full h-16 bg-primary justify-center items-center fixed z-40 md:relative flex bottom-0">
            <div className="md:w-2/6 hidden md:block">
                <button
                    className="bg-black rounded-md hidden md:flex flex-wrap flex-col px-4 py-2 ml-1 md:ml-8"
                    onClick={() => onAsideToggle()}
                >
                    <span className="w-5 h-0.252 bg-white block my-1 mx-0"></span>
                    <span className="w-5 h-0.252 bg-white block my-1 mx-0"></span>
                    <span className="w-5 h-0.252 bg-white block my-1 mx-0"></span>
                </button>
            </div>
            <div className="md:w-2/3 desktop:w-2/6">{audio}</div>

            <div className="md:w-2/6 flex justify-end">
                <button className="items-center mr-2 md:mr-8 hidden md:flex o-btn--ghost">
                    Login <Icon icon="ep:arrow-right" />
                </button>
            </div>
        </header>
    );
};

export default Header;
