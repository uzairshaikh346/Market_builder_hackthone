import ManImage from "@/app/imagess/manimage.jpg";
import WomanImage from "@/app/imagess/womanimage.jpg";
import Accessories from "@/app/imagess/accesoriesimage.jpg";
import KidsImage from "@/app/imagess/kidsimage.jpg";
import Image from "next/image"; // Make sure to import Image
import { client } from "@/sanity/lib/client";


async function EditorPick(){
  
  const products = await client.fetch(`
    *[_type=='product']{
    title,
    description,
    price,
    _id,
    "image_url":productImage.asset->url
    
    
   }`);

  return(
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-[24PX] font-bold title-font text-gray-900 mb-4">
          EDITOR S PICK
        </h1>
        <p className="text-base text-[24px] font-normal leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          Problems trying to resolve the conflict between.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
   {products.slice(20, 25).map((banner: any, index : any) => (
          <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="relative w-full h-[500px] overflow-hidden">
              <Image
                src={banner.image_url}
                alt={banner.alt}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-[48px] py-[12px] relative top-28">
                  <h2 className="text-black text-xl font-bold">
                    {banner.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
};

export default EditorPick;
