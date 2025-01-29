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