import Image from 'next/image';
import image1 from '@/app/imagess/blogImages/pic1.jpg';
import image2 from '@/app/imagess/blogImages/pic2.jpg';

const WhatWeDoSection = () => {
  return (
    <div className="container mx-auto px-5 py-24">
      <div className="text-center mb-12">
        <p className="text-xl text-gray-600 mb-8 font-semibold">WHAT WE DO</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Innovation tailored for you</h1>
      </div>

      <div className="flex flex-col md:flex-row columns-3">
        <div className="w-full md:w-1/2 h-[530px] relative">
          <Image
            src={image1}
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 h-[530px] relative mt-4 md:mt-0 md:ml-4">
          <Image
            src={image2}
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;