import React from 'react';
import Image from 'next/image';
import videocard from '@/app/imagess/aboutImages/Video card.png';

const AboutBrandSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24 py-16"> 

      <div className="flex flex-col md:flex-row justify-between mt-14">
        <div className="md:w-1/2 px-5 py-4">
          <p className="text-red-500 mb-4">Problem trying</p>
          <p className="font-bold text-2xl md:text-4xl">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
        </div>
        <p className="text-xl md:text-2xl font-normal md:w-1/2 mt-8 md:mt-0">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[50px] mt-16">
        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">15k</h1>
          <p className="font-bold text-lg">Happy customers</p>
        </div>
        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">150k</h1>
          <p className="font-bold text-lg">Monthly Visitors</p>
        </div>
        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">15</h1>
          <p className="font-bold text-lg">Countries worldwide</p>
        </div>
        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">100</h1>
          <p className="font-bold text-lg">Top partners</p>
        </div>
      </div>

      <div className="mt-12 p-7">
        <Image src={videocard} alt="video card" layout="responsive" />
      </div>
    </div>
  );
};

export default AboutBrandSection;