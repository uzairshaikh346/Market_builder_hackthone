import Image from "next/image";
import CardImage2 from "@/app/imagess/cardImage2.png";

const FeaturedProduct = () => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src={CardImage2}
          layout="responsive"
          width={720}
          height={600}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center md:ml-0 ml-4">
        <h1 className="title-font sm:text-4xl text-[40px] mb-4 font-bold text-gray-900">
          Part of the Neural
          <br className="hidden lg:inline-block" />
          Universe
        </h1>
        <p className="mb-8 leading-relaxed text-[20px] font-normal">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-[#2DC071] border-0 py-[15px] px-[40px] focus:outline-none rounded text-lg">
            Buy now
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProduct;
