import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="w-full h-52 flex justify-center items-center min-h-screen">
            <div className="w-full text-center flex justify-center flex-wrap">
                <h1 className="text-text-huge w-full">404 Page Not Found</h1>

                <div className="w-full flex justify-center">
                    <p className="w-2/5 text-h4 leading-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores odit eius. Aspernatur
                        maiores modi quidem, cupiditate fugit vitae nihil!
                    </p>
                </div>

                <Link className="o-btn mt-4 a--secondary " to="/">
                    Back to home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
