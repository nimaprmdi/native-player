import { Icon } from "@iconify/react";

const Advertise = () => {
  return (
    <div className="w-full mt-6 bg-dark rounded py-8 px-6 desktop:p-8">
      <h3 className="text-white text-h3 text-center desktop:text-left leading-8">Native Player Available At</h3>

      <div className="flex gap-4 items-center justify-center desktop:justify-start flex-wrap mt-10">
        <a href="#" className="desktop:mr-5">
          <Icon icon="logos:google-play" width={150} />
        </a>

        <a href="#">
          <Icon icon="logos:apple-app-store" width={50} />
        </a>
      </div>
    </div>
  );
};

export default Advertise;
