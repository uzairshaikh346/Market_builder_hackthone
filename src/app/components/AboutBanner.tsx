import React from "react";
import Image from "next/image";
import bannerImage from "@/app/imagess/aboutImages/desktop-header-24.png";

const AboutBanner = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="relative">
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-700 tracking-wider mb-2">
                ABOUT COMPANY
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                ABOUT US
              </h1>
              <div className="absolute w-16 h-1 bg-[#23A6F0] bottom-0 left-0"></div>
            </div>

            <h4 className="text-base sm:text-lg md:text-xl font-normal text-gray-600 leading-relaxed">
              We know how large objects will act,
              <br />
              but things on a small scale
            </h4>

            <button className="py-3 px-8 font-bold text-sm md:text-base text-white bg-[#23A6F0] rounded-md hover:bg-blue-600 transition-colors duration-300 shadow-md">
              Get Quote Now
            </button>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative overflow-hidden ">
              <Image
                src={bannerImage}
                alt="About our company"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
