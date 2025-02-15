import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";
"Use Cleint"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar(){
    return(
        <>
        <nav className="overflow-x-hidden max-w-screen-2xl mx-auto">
          {/* Black Navbar */}
            <div className="bg-black flex text-white text-xs font-extralight h-9 w-screen py-3 sm:text-sm">
                <h1 className="ml-5 sm:ml-20 md:ml-32 md:-mt-1 lg:ml-72 xl:ml-96"> 
                Sign up and get 20% off to your first order!
                </h1>
                <button className="text-xs font-light hover:underline ml-2 sm:text-sm md:-mt-1 md:ml-3"> Sign Up Now
                </button>
                {/* X icon */}
            <X className="hidden sm:block h-5 w-4 ml-[9.9rem] md:ml-[12.9rem] md:-mt-1 lg:ml-[300px] xl:ml-[440px]"/>
            </div>
            {/* Main Navbar */}
            <div className="flex xl:gap-2 lg:h-20">
              <div className="lg:hidden">
            <Sheet>
  <SheetTrigger><AlignJustify className="h-7 mt-3 ml-6 sm:ml-6 md:h-12 md:mt-5"/></SheetTrigger>
  <SheetContent className="bg-customGray text-lg font-medium hover:underline">
   <ul>
    <li className="mt-12 flex flex-col"><Link  href="/detail">Shop</Link>
    <Link className="mt-6" href="/"> On Sale</Link>
    <Link className="mt-6" href="/category"> New Arrivals</Link>
    <Link className="mt-6" href="/category">Brands</Link>
    </li>
    </ul>
  </SheetContent>
</Sheet>
</div>
              <h1 className="text-2xl font-extrabold ml-2 mt-3 md:text-3xl md:mt-6 md:ml-3 lg:ml-20 xl:text-4xl 
              xl:font-sans xl:ml-24"> 
              SHOP.CO 
              </h1>
              <Link href="/detail">
              <h1 className="hidden lg:block ml-8 mt-8 font-sans hover:underline hover:cursor-pointer xl:ml-6 xl:mt-9">
                Shop
              </h1> </Link>
                {/* icon */}
            <ChevronDown className="hidden lg:block w-6 ml-0 mt-10 h-4 xl:mt-11 xl:-ml-2 xl:h-4" />
              {/* Menu */}
            <Link className="hidden lg:block mt-8 ml-3 xl:ml-5 xl:mt-9 font-sans hover:underline" 
            href="/"> On Sale
            </Link>
            <Link className="hidden lg:block mt-8 ml-5 xl:ml-6 xl:mt-9 font-sans hover:underline" 
            href="/category">New Arrivals
            </Link>
            <Link className="hidden lg:block mt-8 ml-5 xl:ml-8 xl:mt-9 font-sans hover:underline" 
            href="/detail">Brands
            </Link>
            {/* search icon */}
            <Search className="mt-4 ml-24 text-black font-bold sm:h-5 sm:w-5 sm:text-gray-600 sm:absolute sm:right-[19rem]
            sm:mt-5 md:mt-8 md:mr-[13rem] lg:mr-24 lg:mt-9 xl:mt-10 xl:-mr-20"/>
            {/* input */}
            <input
            type="text"
            placeholder="Search for products..."
            className="hidden sm:block border border-gray-200 rounded-full shadow-sm placeholder-gray-500 bg-gray-200
            focus:outline-none focus:ring focus:ring-indigo-100 w-60 h-9 placeholder:font-sans 
            mt-3 ml-36 px-8 md:mt-6 md:ml-8 md:w-80 lg:px-9 lg:mt-7 lg:ml-11 xl:mt-7 xl:h-11 xl:w-[450px]"
            />
            {/* cart icon */}
            <Link href="/cart"><ShoppingCart className="mt-4 ml-5 md:mt-8 md:ml-24 lg:ml-1 xl:mt-10"/></Link>
            {/* user icon */}
            <CircleUserRound className="mt-4 ml-1 sm:mr-3 md:mt-8 md:ml-8 lg:ml-2 xl:mt-10"/>   
           </div>
        </nav>
        </>
    )
} 