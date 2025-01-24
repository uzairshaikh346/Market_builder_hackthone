import { client } from "@/sanity/lib/client";
import React from "react";
import Navbar2 from "@/app/components/Navbar2";

export default async function ProductPage({ params }: { params: { slug: string } }) {

  const slug = params.slug;
  const product = await client.fetch(`
    *[_type=='product' && _id=='${slug}'][0]{
      title,
      description,
      price,
      _id,
      "image_url": productImage.asset->url
    }
  `);

  if (!product) {
    return <div>Product not found</div>;
  }

  

  return (
    <div>
      <Navbar2 />
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover rounded"
        src={product.image_url}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
        <p className="leading-relaxed line-clamp-5">{product.description}</p>
        <p className="title-font font-medium text-2xl mt-5 text-gray-900">Price: ${product.price}</p>

      </div>
    </div>
  </div>
</section>
    </div>
  );
}
