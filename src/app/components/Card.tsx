import Image from "next/image";
import CardBoyImage from "@/app/imagess/cardboyImage.png";

const ProductShowcase = () => (
  <section className="text-white body-font bg-[#23856D]">
    <div className="container mx-auto flex pt-8 md:flex-row flex-col items-center px-20">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:mr-auto md:ml-0 ml-4 mr-4">
        <p className="text-[28px] font-normal mb-[20px]">Summer 2020</p>
        <h1 className="title-font sm:text-5xl text-[88px] font-bold mb-4">
          Vita Classic <br /> Product
        </h1>
        <p className="mb-8 leading-relaxed font-normal text-[18px]">
          We know how large objects will act, We know how are objects will act,
          We know
        </p>
        <div className="flex gap-6">
          <p className="font-bold text-[20px] relative top-2">$16.14</p>
          <button className="bg-[#2DC071] py-[15px] px-[40px] rounded-md text-[18px]">
            Add to cart
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src={CardBoyImage}
        />
      </div>
    </div>
  </section>
);

export default ProductShowcase;
