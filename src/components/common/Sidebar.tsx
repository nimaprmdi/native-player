import { useRef, useMemo } from "react";
import Plyr, { APITypes } from "plyr-react";
import { Icon } from "@iconify/react";
import google from "../../assets/images/externals/google.png";
import apple from "../../assets/images/externals/apple.png";

const Sidebar = (): JSX.Element => {
    const ref = useRef<APITypes>(null);

    const video = useMemo(() => {
        return (
            <Plyr
                ref={ref}
                source={{
                    type: "video",
                    sources: [
                        {
                            src: "http://nimapourmohammadi.com/wp-content/uploads/2022/08/dodge-tool.mp4",
                            provider: "html5",
                        },
                    ],
                }}
            />
        );
    }, []);

    return (
        <aside className="w-full desktop:pr-10 desktop:pl-6">
            <div className="w-full h-full bg-dark">{video}</div>

            <div className="w-full mt-6 bg-dark rounded">
                <div className="w-full h-16 flex justify-start items-center hover:bg-accent cursor-pointer transition duration-150 ease-out border-b border-gray-500">
                    <h5 className="text-white ml-4">1. Ellie-Goulding</h5>
                </div>
                <div className="w-full h-16 flex justify-start items-center hover:bg-accent cursor-pointer transition duration-150 ease-out border-b border-gray-500">
                    <h5 className="text-white ml-4">1. Ellie-Goulding</h5>
                </div>
                <div className="w-full h-16 flex justify-start items-center hover:bg-accent cursor-pointer transition duration-150 ease-out border-b border-gray-500">
                    <h5 className="text-white ml-4">1. Ellie-Goulding</h5>
                </div>
                <div className="w-full h-16 flex justify-start items-center hover:bg-accent cursor-pointer transition duration-150 ease-out border-b border-gray-500">
                    <h5 className="text-white ml-4">1. Ellie-Goulding</h5>
                </div>
            </div>

            <div className="w-full mt-6 bg-dark rounded p-8">
                <h3 className="text-white text-h3 ">Native Player Available At</h3>

                <div className="flex justify-start flex-wrap mt-10">
                    <a href="#" className="mr-5">
                        <img src={google} alt="Apple store" />
                    </a>

                    <a href="#">
                        <img src={apple} alt="Apple store" />
                    </a>
                </div>
            </div>

            <div className="w-full mt-6 bg-dark rounded p-8">
                <h3 className="text-white text-h3">Upgrade your Plan</h3>

                <div className="flex flex-wrap md:flex-nowrap justify-between mt-12 gap-6">
                    <div className="rounded border border-accent w-full desktop:w-1/2 ">
                        <div className="w-full border-b border-accent text-center flex flex-wrap items-center justify-center py-2 mt-4">
                            <h4 className="text-text-huge text-white font-bold leading-9">$20</h4>

                            <span className="text-white w-full mt-4">Per Year</span>
                        </div>

                        <div className="w-full">
                            <div className="flex justify-center px-4 py-4">
                                <Icon icon="bi:check-lg" className="text-accent text-h2 mr-2" />

                                <p className="text-white">Lorem ipsum dolor sit amet.</p>
                            </div>

                            <div className="flex justify-center px-4 py-4">
                                <Icon icon="bi:check-lg" className="text-accent text-h2 mr-2" />

                                <p className="text-white">Lorem ipsum dolor sit amet.</p>
                            </div>

                            <div className="flex justify-center px-4 py-4">
                                <Icon icon="bi:check-lg" className="text-accent text-h2 mr-2" />

                                <p className="text-white">Lorem ipsum dolor sit amet.</p>
                            </div>

                            <div className="flex justify-center px-4 py-4">
                                <Icon icon="bi:check-lg" className="text-accent text-h2 mr-2" />

                                <p className="text-white">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded border border-accent w-full desktop:w-1/2 ">
                        <div className="w-full border-b border-accent text-center flex flex-wrap items-center justify-center py-2 mt-4">
                            <h4 className="text-text-huge text-white font-bold leading-9">$20</h4>

                            <span className="text-white w-full mt-4">Per Year</span>
                        </div>

                        <div className="w-full">
                            <div className="flex justify-center px-4 py-4">
                                <Icon icon="bi:check-lg" className="text-accent text-h2 mr-2" />

                                <p className="text-white">Lorem ipsum dolor sit amet.</p>
                            </div>

                            <div className="flex justify-center px-4 py-4">
                                <Icon icon="bi:check-lg" className="text-accent text-h2 mr-2" />

                                <p className="text-white">Lorem ipsum dolor sit amet.</p>
                            </div>

                            <div className="flex justify-center px-4 py-4">
                                <Icon icon="bi:check-lg" className="text-accent text-h2 mr-2" />

                                <p className="text-white">Lorem ipsum dolor sit amet.</p>
                            </div>

                            <div className="flex justify-center px-4 py-4">
                                <Icon icon="bi:check-lg" className="text-accent text-h2 mr-2" />

                                <p className="text-white">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
