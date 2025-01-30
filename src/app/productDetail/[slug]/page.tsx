"use client"
import { client } from "@/sanity/lib/client";
import React from "react";
import Navbar from "@/app/components/Navbar2";
import { addToCart } from "@/app/Action/action";
import Swal from "sweetalert2";
import { Product } from "@/app/type";

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

  
  const handleAddToCard = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  };
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover rounded"
        src={product.image_url}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 md:mt-40">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
        <p className="leading-relaxed line-clamp-5">{product.description}</p>
        <p className="title-font font-medium text-2xl mt-5 text-gray-900">Price: ${product.price}</p>
        <button
                  className="mt-4 px-4 bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-110 transition duration-200  text-white py-2 rounded-md "
                  onClick={(e) => {
                    handleAddToCard(e, product);
                  }}
                >
                  Add to Cart
                </button>

      </div>

    </div>
  </div>
</section>
    </div>
  );
}
