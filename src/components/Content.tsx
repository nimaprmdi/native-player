import { useEffect } from "react";
import { Icon } from "@iconify/react";
import Post from "../models/Post";
import { millisecondsToMinutes } from "../utils/helpers";
import { Link } from "react-router-dom";

interface ContentProps {
    postData: Post;
}

const Content = ({ postData }: ContentProps): JSX.Element => {
    useEffect(() => {}, [postData]);

    return (
        <article className="w-full mb-8">
            <h2 className="c-content__title text-h2 pl-4 leading-8">{postData.name}</h2>

            <div className="c-content__meta w-full flex flex-wrap gap-3 justify-start items-center pl-4 mt-8 mb-8">
                <div className="flex items-center mr-1 desktop:mr-6">
                    <Icon className="text-gray-500" icon="ant-design:user-outlined" />
                    <span className="text-gray-500 ml-1">
                        <>
                            {postData.artists.map((artist) => {
                                return (
                                    <Link key={artist.id} className="mr-2 text-gray-500" to={`/single/${artist.id}`}>
                                        {artist.name}
                                    </Link>
                                );
                            })}
                        </>
                    </span>
                </div>

                <div className="flex items-center mr-1 desktop:mr-6">
                    <Icon className="text-gray-500" icon="akar-icons:clock" />
                    <span className="text-gray-500 ml-1">Released in {postData.album.release_date}</span>
                </div>

                <div className="flex items-center mr-1 desktop:mr-6">
                    <Icon className="text-gray-500" icon="akar-icons:music" />
                    <span className="text-gray-500 ml-1">Total Time {millisecondsToMinutes(postData.duration_ms)}</span>
                </div>
            </div>

            <div className="c-content__article w-full pl-4">
                <p className="text-dark text-h4 leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo quidem, eum commodi nam ut dolorum
                    quod vero recusandae corrupti dignissimos odit sequi doloremque, fuga earum ipsum quibusdam iusto
                    distinctio alias vitae cupiditate? Ab sit incidunt iure at ipsa dignissimos, nulla dolores rem
                    voluptate. Iste consequatur eaque iure. Impedit neque repudiandae unde facere error obcaecati
                    facilis architecto nulla, officiis nisi vel fugit adipisci asperiores delectus, excepturi mollitia
                    optio quia maiores consequuntur! Exercitationem amet reiciendis sit assumenda distinctio, sequi
                    tempora nam vero dolorum est. Eaque eveniet voluptatum numquam sapiente labore necessitatibus sit
                    cupiditate! Fuga dolorum aperiam esse consectetur quaerat itaque libero exercitationem illum
                    similique facere vel culpa maxime veritatis natus, animi praesentium adipisci ab deleniti assumenda
                    ducimus earum cumque! Exercitationem, consequuntur.
                </p>
            </div>
        </article>
    );
};

export default Content;
