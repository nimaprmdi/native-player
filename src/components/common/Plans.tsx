import { Icon } from "@iconify/react";

const Plans = () => {
    return (
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
    );
};

export default Plans;
