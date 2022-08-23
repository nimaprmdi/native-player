import { Icon } from "@iconify/react";
import blog from "../../../assets/images/blog/blog1.jpg";

const CardWide = (): JSX.Element => {
    const currentData = new Date();

    return (
        <div className="w-full mb-12 px-2">
            <img className="w-full rounded" src={blog} alt="blog" />

            <div className="w-full py-12 px-8 bg-gray-200 shadow-lg shadow-gray-300 rounded-b">
                <h2 className="text-h3 leading-7">Lorem ipsum dolor sit amet consectetur.</h2>

                <div className="w-full flex flex-wrap justify-between items-center mt-12 desktop:mt-6">
                    <div className="flex items-center">
                        <Icon icon="akar-icons:clock" className="mr-2" />

                        <span>{currentData.toDateString()}</span>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center mr-3">
                            <Icon icon="ant-design:user-outlined" className="mr-1 text-h4" />
                            <span>Admin</span>
                        </div>

                        <div className="flex items-center mx-2">
                            <Icon icon="bx:comment-detail" className="mr-1 text-h4" />
                            <span>2</span>
                        </div>

                        <div className="flex items-center mx-2">
                            <Icon icon="ant-design:like-outlined" className="mr-1 text-h4" />
                            <span>152</span>
                        </div>

                        <div className="flex items-center mx-2">
                            <Icon icon="ant-design:dislike-outlined" className="mr-1 text-h4" />
                            <span>6</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardWide;
