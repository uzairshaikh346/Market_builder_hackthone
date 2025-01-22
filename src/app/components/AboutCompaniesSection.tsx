import Image from 'next/image';
import Link from 'next/link';
import brand1 from "@/app/imagess/aboutImages/brands/Vector.png";
import brand2 from "@/app/imagess/aboutImages/brands/col-md-2 (1).png";
import brand3 from "@/app/imagess/aboutImages/brands/col-md-2 (2).png";
import brand4 from "@/app/imagess/aboutImages/brands/col-md-2.png";
import brand5 from "@/app/imagess/aboutImages/brands/fa-brands-4.png";
import brand6 from "@/app/imagess/aboutImages/brands/fa-brands-6.png";
import bannerImage2 from '@/app/imagess/aboutImages/2eeaef7ecedd3954687aefbdb6236bb6.jpg';


const AboutCompaniesSection = () => {
  return (
    <div>
      {/* Big Companies Section */}
      <div className='text-center bg-[#FAFAFA] py-[50px] px-[100px]'>
        <h1 className='font-bold text-[40px] mb-5'>Big Companies Are Here</h1>
        <p className='text-[14px] font-normal text-gray-500'>
          Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className='flex flex-col md:flex-row justify-around mt-9 gap-10 items-center'>
          <Image src={brand1} alt='brand'/>
          <Image src={brand2} alt='brand'/>
          <Image src={brand3} alt='brand'/>
          <Image src={brand4} alt='brand'/>
          <Image src={brand5} alt='brand'/>
          <Image src={brand6} alt='brand'/>
        </div>
      </div>

      {/* Work With Us Section */}
      <div className="flex flex-col md:flex-row items-center bg-[#2A7CC7] text-white">
        <div className="flex-1 p-10 md:p-20 text-center md:text-left">
          <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4">WORK WITH US</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Now Let s Grow Yours</h1>
          <p className="text-sm md:text-base lg:text-lg mb-6">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century
          </p>
          <Link href="/contact">
            <p className="inline-block border-white border-[1px] text-white py-3 px-10 rounded-md text-sm md:text-base lg:text-lg font-bold">Button</p>
          </Link>
        </div>
        <div className="flex-1 w-full">
          <Image src={bannerImage2} alt="banner" layout="responsive" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutCompaniesSection;