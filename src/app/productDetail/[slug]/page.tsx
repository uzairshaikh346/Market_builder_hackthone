"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { addToCart } from "@/app/Action/action";
import Swal from "sweetalert2";
import { Product } from "@/app/type";
import { FiShoppingCart, FiArrowLeft, FiStar, FiShare2 } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { set } from "sanity";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [relatedProduct , setRelatedProduct] = useState([] as Product[]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const slug = params.slug;
        const fetchedProduct = await client.fetch(`
          *[_type=='product' && _id=='${slug}'][0]{
            title,
            description,
            price,
            _id,
            "image_url": productImage.asset->url
        }
        `);

        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    const RelatedProduct = async () => {
      try {
      
        const fetchedRelatedProduct = await client.fetch(`
          *[_type=='product']{
            title,
            description,
            price,
            _id,
            "image_url": productImage.asset->url
        }
        `);
        setRelatedProduct(fetchedRelatedProduct);

      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchProduct();
    RelatedProduct();
  }, [params.slug]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    // Add the product multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${quantity} ${quantity > 1 ? "items" : "item"} added to cart`,
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      timerProgressBar: true,
      background: "#4F46E5",
      color: "#ffffff",
      iconColor: "#ffffff",
    });
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <Navbar />
        <div className="w-full max-w-md p-8 mt-20">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-gray-200 rounded-lg w-full"></div>
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            <div className="h-12 bg-gray-200 rounded w-full"></div>
          </div>
          <p className="text-center mt-6 text-gray-500">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        <Navbar />
        <div className="max-w-md w-full p-8 mt-32 text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            We couldn&apos;t find the product you&apos;re looking for. It might have been
            removed or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <span className="mr-2">
              <FiArrowLeft />
            </span>{" "}
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 flex items-center text-sm text-gray-600">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-indigo-600">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.title}</span>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row -mx-4">
            {/* Product Image */}
            <div className="lg:w-1/2 px-4 mb-10 lg:mb-0">
              <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg h-[500px]">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={product.image_url}
                  alt={product.title}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <span className="text-gray-700 w-5 h-5 cursor-pointer hover:text-indigo-600">
                    <FiShare2 />
                  </span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 px-4">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="w-5 h-5 fill-current">
                      <FiStar />
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">24 Reviews</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              <div className="mb-6">
                <span className="text-3xl font-bold text-indigo-600">
                  ${product.price}
                </span>
                <span className="ml-2 text-sm text-gray-500">/ per item</span>
              </div>

              <div className="mb-8">
                <div className="prose prose-indigo max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={decrementQuantity}
                    className="text-gray-500 focus:outline-none focus:text-gray-600 p-2 border border-gray-300 rounded-l-md"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M20 12H4"></path>
                    </svg>
                  </button>
                  <input
                    className="h-10 w-16 border border-gray-300 text-center text-gray-900"
                    type="number"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={incrementQuantity}
                    className="text-gray-500 focus:outline-none focus:text-gray-600 p-2 border border-gray-300 rounded-r-md"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 4v16m8-8H4"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="mr-2">
                    <FiShoppingCart />
                  </span>
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300">
                  Buy Now
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-10 border-t border-gray-200 pt-6">
                <div className="flex space-x-4 mb-4 border-b border-gray-200">
                  <button
                    className={`pb-4 text-sm font-medium ${activeTab === "description" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </button>
                  <button
                    className={`pb-4 text-sm font-medium ${activeTab === "details" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setActiveTab("details")}
                  >
                    Details
                  </button>
                  <button
                    className={`pb-4 text-sm font-medium ${activeTab === "reviews" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </button>
                </div>

                <div className="py-4">
                  {activeTab === "description" && (
                    <div className="prose prose-indigo max-w-none">
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  )}

                  {activeTab === "details" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Product ID:</span>
                          <span className="ml-2 text-gray-900">
                            {product._id}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Category:</span>
                          <span className="ml-2 text-gray-900">
                            Premium Products
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Availability:</span>
                          <span className="ml-2 text-green-600">In Stock</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Shipping:</span>
                          <span className="ml-2 text-gray-900">
                            Free Shipping
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div className="space-y-6">
                      <p className="text-gray-600 text-sm">
                        No reviews yet. Be the first to review this product.
                      </p>
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                        Write a Review
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would be populated with actual related products */}
            {relatedProduct.slice(0, 4).map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                height={1000}
                width={1000}
                alt="product"
                src={item.image_url}
                className="object-cover object-top w-full h-80"/>
               
                <div className="p-4">
                  <h3 className="text-gray-900 font-medium">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {item.description.slice(0, 100)}...
                  </p>
                  <p className="text-indigo-600 font-bold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
