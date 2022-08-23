import google from "../../assets/images/externals/google.png";
import apple from "../../assets/images/externals/apple.png";

const Advertise = () => {
    return (
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
    );
};

export default Advertise;
