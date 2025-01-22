"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
                <div className="text-xl font-bold text-gray-900">Bandage</div>
            </Link>
            
          </div>
          <div className="flex md:hidden items-center space-x-4"> {/* Show on mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.375c.521 0 .941.419.941.941v10.118a.941.941 0 01-.941.941H2.25a.941.941 0 01-.941-.941V3.941c0-.522.42-.941.941-.941zM14.25 3h1.375c.521 0 .941.419.941.941v10.118a.941.941 0 01-.941.941H14.25a.941.941 0 01-.941-.941V3.941c0-.522.42-.941.941-.941zM21.75 3h1.375c.521 0 .941.419.941.941v10.118a.941.941 0 01-.941.941h-1.375a.941.941 0 01-.941-.941V3.941c0-.522.42-.941.941-.941z"
              />
            </svg>
          </div>
          <div className="hidden md:block ml-10"> {/* Show on desktop */}
              <div className="flex items-baseline space-x-4">
                <Link href="/">
                  
                    <div className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                    </div>
                  
                </Link>
                <Link href="/product">
                  
                    <div className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Product
                    </div>
                
                </Link>
                <Link href="/pricing">
                  
                    <div className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Pricing
                    </div>
                  
                </Link>
                <Link href="/contact">
                  
                    <div className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                    </div>
                  
                </Link>
                <Link href="/login">
                 
                    <div className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Login
                    </div>
                 
                </Link>
                
              </div>
            </div>
            <div className="hidden md:block"> {/* Become a member button on right */}
              <Link href="/become-a-member">
                
                  <div className="bg-[#23A6F0] text-white px-3 py-2 rounded-md text-sm font-medium">
                  Become a member
                  </div>
                
              </Link>
            </div>
          <div className="-mr-2 flex md:hidden"> {/* Hamburger menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              
                <div className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
                </div>
              
            </Link>
            <Link href="/product">
              
                <div className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Product
                </div>
             
            </Link>
            <Link href="/pricing">
              
                <div className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Pricing
                </div>
              
            </Link>
            <Link href="/contact">
              
                <div className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact
                </div>
              
            </Link>
            <Link href="/login">
             
                <div className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Login
                </div>
             
            </Link>
            <Link href="/become-a-member">
              
                <div className="bg-[#23A6F0] text-white block px-3 py-2 rounded-md text-base font-medium">
                Become a member
                </div>
              
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;