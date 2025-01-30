"use client";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Product } from "../type";
import { addToCart } from "../Action/action";
import Swal from "sweetalert2";

function ProductSection() {
  const [product, setProduct] = useState<Product[]>([]);
  const [records, setRecords] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 8;

  const startNumber = (currentPage - 1) * itemsPerPage;
  const endNumber = currentPage * itemsPerPage;

  const fetchData = async () => {
    const totalProducts = await client.fetch(`*[_type == "product"]`);
    setTotalPages(Math.ceil(totalProducts.length / itemsPerPage));

    try {
      const query = `
              *[_type=='product'][${startNumber}...${endNumber}]{
              title,
              description,
              price,
              tags,
              _id,
              "image_url":productImage.asset->url
              
              
             }`;
      const data: Product[] = await client.fetch(query);
      setProduct(data);
      setRecords(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const filter = (e: any) => {
    setRecords(
      product.filter((f) =>
        f.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <p className="text-base font-normal text-[20px] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Featured Product
          </p>
          <h1 className="sm:text-3xl text-[24px] font-bold title-font text-gray-900 mb-4">
            BESTSELLER PRODUCTS
          </h1>
          <p className="text-base text-[14px] font-normal leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <input
          className="w-full py-2 text-lg rounded-md px-5 mb-3"
          type="text"
          onChange={filter}
          placeholder="Search Product"
        />
        <div className="flex flex-wrap -m-4">
          {records.slice(0, 20).map((product) => (
            <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md">
              <div className="block relative h-[430px] w-full rounded overflow-hidden mx-auto">
               
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.image_url}
                    layout="fill"
                    objectFit="cover"
                  />
                
              </div>
              <div className="mt-4 text-left">
                <span className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.title}
                </span>
                <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-2">
                  {product.description}
                </h2>
                <p className="mt-1">${product.price}</p>
                <p className="flex gap-2 flex-wrap">
                  {product.tags.map((item, index) => (
                    <div
                      className="bg-gray-400 text-gray-800 rounded-md px-2"
                      key={index}
                    >
                      {item}
                    </div>
                  ))}
                </p>
                  <div className="flex justify-around">

                <button
                  className="mt-4 px-3 bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-110 transition duration-200  text-white py-2 rounded-md "
                  onClick={(e) => {
                    handleAddToCard(e, product);
                  }}
                  >
                  Add to Cart
                </button>
                <Link href={`/productDetail/${product._id}`}>
                <button
                  className="mt-4 px-3 bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-110 transition duration-200  text-white py-2 rounded-md "
                  
                  >Product Detail</button>
                </Link>
                  </div>

                
              </div>
            </div>
          ))}
        </div>

  

        <div className="flex justify-center my-10">
          <button
            onClick={handlePrev}
            className="bg-blue-400 p-2 mx-2"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`p-2 mx-1 ${
                currentPage === page ? "bg-blue-600 text-white" : "bg-blue-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            className="bg-blue-400 p-2 mx-2"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
<Link href="/cart">
      <button 
                  className="mt-4 w-full px-3 bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-110 transition duration-200  text-white py-2 rounded-md "
      
      >View cart</button>
</Link>
      </div>
    </section>
  );
}

export default ProductSection;