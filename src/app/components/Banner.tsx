import Image from "next/image";
import BannerImage from "@/app/imagess/bannerImage.jpg"; // Please replace this with the correct path to your image

const Banner = () => (
  <div className="relative w-full h-[500px] md:h-[700px]">
    <Image
      src={BannerImage}
      alt="Banner Background"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 w-full h-full"
    />
    <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white bg-opacity-5 px-4 md:px-36">
      <h1 className="text-[12px] md:text-[16px] font-bold mb-2 md:mb-4">
        SUMMER 2020
      </h1>
      <h2 className="text-[36px] md:text-[56px] mb-2 md:mb-4">
        NEW COLLECTION
      </h2>
      <p className="mb-4 md:mb-6 max-w-md font-normal text-[12px] md:text-[16px]">
        We know how large objects will act, but things on a small scale.
      </p>
      <button className="bg-green-500 text-white font-normal py-2 px-4 rounded hover:bg-green-600">
        SHOP NOW
      </button>
    </div>
  </div>
);

export default Banner;
