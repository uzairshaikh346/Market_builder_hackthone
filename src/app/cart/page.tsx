"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';

import { Product } from '../type';
import { getCartItems, removeFromCart, updateCartQuantity } from '../Action/action';
import checkout from "../Action/checkout";
import Navbar from '../components/Navbar';

function CartPage() {
  const [cartItem, setCartItem] = useState<Product[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "", // Added address field
  });
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    setCartItem(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: '#d33',
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItem(getCartItems());
        Swal.fire("Removed", "Item has been removed!", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItem(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.quantity + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product && product.quantity > 1) {
      handleQuantityChange(id, product.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: '#d33',
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsCheckout(true);
      }
    });
  };

  const HandleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmit = () => {
    checkout(cartItem, customerInfo);
    Swal.fire({
      title: "Thank you for your purchase!",
      text: `Order Number: ${Math.random()}\nWe are processing your order. You will receive an email confirmation shortly. You can track your order in your account.`,
      icon: "success",
      confirmButtonText: "  OK  ",
      showCancelButton : true
    });
  };

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

          {cartItem.length > 0 ? (
            <div className="space-y-4">
              {cartItem.map((item: Product, index: number) => (
                <div key={index} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <Image src={item.image_url} alt='Product Image' height={100} width={100} className="rounded" />
                    <div>
                      <h2 className="text-lg font-medium">{item.title}</h2>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded"
                      onClick={() => handleDecrement(item._id)}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border rounded">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded"
                      onClick={() => handleIncrement(item._id)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleRemove(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="text-right mt-6">
                <p className="text-xl font-bold">Total: ${calculateTotal().toFixed(2)}</p>
                <button
                  className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                  onClick={handleProceed}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {isCheckout && (
          <div className="mt-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <div className="flex flex-col text-gray-800 font-medium gap-4">
              <label htmlFor="name">Name:</label>
              <input
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                name="name"
                required
                onChange={HandleOnChange}
                value={customerInfo.name}
              />

              <label htmlFor="email">Email:</label>
              <input
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                required
                onChange={HandleOnChange}
                value={customerInfo.email}
              />

              <label htmlFor="phone">Phone:</label>
              <input
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="tel"
                id="phone"
                name="phone"
                required
                onChange={HandleOnChange}
                value={customerInfo.phone}
              />

              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
