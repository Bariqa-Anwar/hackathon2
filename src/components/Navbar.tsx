import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";

export default function Navbar(){
    return(
        <>
        <nav>
          {/* Black Navbar */}
            <div className="bg-black flex text-white text-xs h-9 py-3 xs:px-5 smCustom:px-10 sm:text-sm">
                <h1 className="sm:ml-14 md:ml-32 md:-mt-1 lg:ml-56 xl:ml-96"> 
                Sign up and get 20% off to your first order!
                </h1>
                <button className="text-xs hover:underline sm:text-sm md:-mt-1 md:ml-3"> Sign Up Now
                </button>
                {/* X icon */}
            <X className="hidden sm:block h-5 w-4 sm:ml-28 md:ml-36 md:-mt-1 lg:ml-72 xl:ml-96"/>
            </div>
            {/* Main Navbar */}
            <div className="flex lg:ml-16">
            <AlignJustify className="h-7 mt-3 ml-2 md:h-12 md:mt-5 lg:hidden"/>
              <h1 className="text-2xl font-extrabold ml-2 mt-3 xs:ml-3 md:text-3xl md:mt-6 md:ml-3 lg:ml-20"> 
              SHOP.CO 
              </h1>
              <h1 className="hidden md:block ml-7 mt-5 md:mt-8 font-sans hover:underline hover:cursor-pointer lg:ml-9 xl:ml-6">
                Shop
              </h1> 
                {/* icon */}
            <ChevronDown className="hidden md:block h-6 w-6 mt-9 ml-2 lg:mt-8 lg:ml-1" />
              {/* Menu */}
            <Link className="hidden lg:block mt-8 ml-3 xl:ml-5 font-sans hover:underline" href="/">On Sale</Link>
            <Link className="hidden lg:block mt-8 ml-4 xl:ml-6 font-sans hover:underline" href="/arrivals">New Arrivals</Link>
            <Link className="hidden lg:block mt-8 ml-8 xl:ml-8 font-sans hover:underline" href="/brands">Brands</Link>
            {/* search icon */}
            <Search className="mt-4 ml-16 xs:ml-20 smCustom:ml-32 sm:h-5 sm:w-5 sm:absolute sm:right-80 sm:mt-5
            md:mt-8 lg:mr-20 lg:mt-8"/>
            {/* input */}
            <input
            type="text"
            placeholder="Search for products..."
            className="hidden sm:block border border-gray-200 rounded-full shadow-sm placeholder-gray-500 bg-gray-200
            focus:outline-none focus:ring focus:ring-indigo-100 w-60 h-8 placeholder:font-sans 
            placeholder:font-extrabold mt-4 ml-36 px-8 md:mt-7 lg:ml-6 lg:w-80 lg:px-9"
            />
            {/* cart icon */}
            <ShoppingCart className="mt-4 ml-6 md:mt-8"/>
            {/* user icon */}
            <CircleUserRound className="mt-4 ml-5 md:mt-8 lg:mr-4"/>   
           </div>
        </nav>
        </>
    )
} 