"use client";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import checkout from "../Action/checkout";


// Define the Product type
interface Product {
  title: string;
  description: string;
  price: number;
  _id: string;
  image_url: string;
  tags: [];
}

function ProductSection() {
  const [product, setProduct] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [ischekout, setCheckOut] = useState(false);
  const [customerInfo , setCustomerInfo] = useState({
    name : '',
    email : '',
    phone : ''
  })
  const [records, setRecords] = useState<Product[]>([]);


 const HandleOnChange = (e:any) => {
  const { name, value } = e.target;
  setCustomerInfo({ ...customerInfo, [name]: value });
};

  const handOnsubmit =() => {
    checkout(cart,customerInfo)
  }

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };
  const handleCheckOut = () => {
    setCheckOut(!ischekout);
  };
  const fetchProduct = async () => {
    try {
      const query = `
              *[_type=='product']{
              title,
              description,
              price,
              tags,
              _id,
              "image_url":productImage.asset->url
              
              
             }`;
      const data: Product[] = await client.fetch(query);
      setProduct(data);
      setRecords(data)
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const filter = (e:any) => {
    setRecords(product.filter(f => f.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }

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
        <input className="w-full py-2 text-lg rounded-md px-5 mb-3" type="text" onChange={filter} placeholder="Search Product" />
        <div className="flex flex-wrap -m-4">
          {records.slice(0, 20).map((product) => (
            <Link
            href={`/productDetail/${product._id}`}
            key={product._id} // key prop added here
            className="lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <div  >
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
                <p className="mt-1">
                  ${product.price}{" "}
                  {/* <span className="line-through">{product.oldPrice}</span> */}
                </p>
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
                
                
                <button
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                  onClick={() => {
                    addToCart(product);
                  }}
                  >
                  Add to Cart
                </button>
              </div>
            </div>
                  </Link>
          ))}
        </div>

        <div className="bg-gray-100 p-4 rounded-md mt-8">
          <h1 className="text-xl font-semibold mb-4">Cart Summary</h1>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-2 border-b"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                  <div className="flex gap-6">
                    <Image
                      height={50}
                      width={50}
                      className="rounded-md"
                      src={item.image_url}
                      alt={item.title}
                    />
                    <button
                      onClick={() => removeFromCart(index)}
                      className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              Your Cart is empty please add products
            </p>
          )}
        </div>
        <button
          onClick={handleCheckOut}
          className="bg-blue-600 text-white w-full rounded-md py-2"
        >
          CheckOut
        </button>
        {ischekout && (
          <div className=" flex flex-col text-black text-xl gap-5 pt-3">
            
              <label>Name:</label>
              <input type="text" id="name" name="name" required
              onChange={HandleOnChange}
              value={customerInfo.name}
               />
              <br />
              <br />

              <label>Email:</label>
              <input type="email" id="email" name="email" required
              onChange={HandleOnChange}
              value={customerInfo.email} />
              <br />
              <br />

              <label>Phone:</label>
              <input type="tel" id="phone" name="phone" required
              onChange={HandleOnChange}
              value={customerInfo.phone} />
              <br />
              <br />

              <button onClick={handOnsubmit} className="bg-blue-500 text-white py-2 rounded-md">Submit</button>
            
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductSection;