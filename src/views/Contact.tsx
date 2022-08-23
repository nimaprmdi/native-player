import OurMap from "../components/common/OurMap";

const Contact = () => {
    return (
        <section className="c-home w-full  pb-24 desktop:pb-40 pt-14 md:pt-4 desktop:pt-8 px-2 desktop:px-8 desktop:mb-56 flex justify-between flex-wrap">
            <h1 className="text-h1 w-full mb-6 order-1">Find Us</h1>

            <div className="w-full desktop:w-1/2 h-80 desktop:h-80 order-2">
                <OurMap />
            </div>

            <div className="w-full desktop:w-1/2 desktop:h-80 flex items-center justify-start mt-10 md:mt-0 order-3">
                <div className="ml-4 desktop:ml-16">
                    <h1 className="text-h1 text-accent">+9100 2481 5842</h1>

                    <p className="text-h4">4578 Marmora</p>

                    <p className="text-h4 font-bold mt-4">Road, Glasgow D04 89GR</p>

                    <p className="text-h6 mt-4 w-3/4 leading-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, iusto est fugit, accusantium
                        excepturi ullam doloribus dignissimos mollitia numquam libero soluta a debitis beatae. Explicabo
                        animi recusandae officia quia incidunt.
                    </p>
                </div>
            </div>

            <div className="w-full  pr-16 desktop:w-1/2 desktop:h-80 flex items-center justify-start mt-10 md:mt-0 order-5 desktop:order-4">
                <div className="ml-4 desktop:ml-0 w-full">
                    <h1 className="text-h1 text-dark font-bold">Contact Us With</h1>

                    <span className="text-h5 text-gray-500">Any questions</span>

                    <form className="w-full flex justify-between gap-10 mt-6">
                        <div className="w-1/2">
                            <div>
                                <label className="w-full my-2 block" htmlFor="name">
                                    Name
                                </label>
                                <input className="w-full" type="text" id="name" />
                            </div>
                            <div>
                                <label className="w-full my-2 block" htmlFor="email">
                                    Email
                                </label>
                                <input className="w-full" type="text" id="email" />
                            </div>
                            <div>
                                <label className="w-full my-2 block" htmlFor="phone_number">
                                    Phone number
                                </label>
                                <input className="w-full" type="text" id="phone_number" />
                            </div>
                        </div>

                        <div className="w-1/2 mt-6">
                            <textarea className="w-full h-full" name="message"></textarea>
                        </div>
                    </form>
                </div>
            </div>

            <div className="w-full desktop:w-1/2 mt-8 md:my-8 py-12 desktop:mt-0 px-2 flex items-center justify-start bg-dark order-4 desktop:order-5">
                <div className="ml-4 desktop:ml-16">
                    <h1 className="text-h1 text-white font-bold mt-0">Social Websites</h1>

                    <p className="text-h4 text-accent mt-10 leading-8">
                        Nullam Ac Urna Velit Pellentesque In Arcu Tortor Pellentesque Nec
                    </p>

                    <p className="text-h6 mt-4 w-full px-2 desktop:px-0 desktop:w-3/4 leading-6 text-white tracking-wider">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, iusto est fugit, accusantium
                        excepturi ullam doloribus dignissimos mollitia numquam libero soluta a debitis beatae. Explicabo
                        animi recusandae officia quia incidunt.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
