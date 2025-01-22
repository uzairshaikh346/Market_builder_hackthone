import React from 'react';
import Image from 'next/image';
import bannerImage from '@/app/imagess/aboutImages/desktop-header-24.png';

const AboutBanner = () => {
  return (
    <div className='bg-white'>

    <div className="flex flex-col md:flex-row items-center bg-white">
      <div className="md:w-1/2 pt-2 md:px-14">
        <p className="text-sm sm:text-base md:text-lg font-bold mb-6 sm:mb-10">ABOUT COMPANY</p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-10">ABOUT US</h1>
        <h4 className="text-base sm:text-lg md:text-xl font-normal mb-4 sm:mb-6 md:mb-8">
          We know how large objects will act,
          <br />
          but things on a small scale
        </h4>
        <button className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 font-bold text-xs sm:text-sm md:text-base text-white bg-[#23A6F0] rounded-md">
          Get Quote Now
        </button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <Image src={bannerImage} alt="banner" className="rounded-lg" />
      </div>
    </div>
    </div>
  );
};

export default AboutBanner;