import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineChevronRight } from "react-icons/md";
import { HiMiniAdjustmentsVertical } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalf  } from "react-icons/fa";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Ellipsis } from "lucide-react";
import Slider from "@/components/Slider";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet" 
export default function Casual () {
    return (
        <>
        <main className="overflow-x-hidden overflow-y-hidden max-w-screen-2xl mx-auto">
        <hr className="w-[18.5rem] mx-auto mt-2 xs:w-[21rem] xs:mr-7 smCustom:w-[23.6rem] smCustom:mr-8 sm:w-[37.7rem] sm:ml-3
        md:w-[44rem] lg:w-[56rem] lg:ml-[5rem] xl:w-[70rem] xl:ml-[6rem]">
        </hr>
           <div className="lg:hidden">
            {/* the filters bar */}
           <Sheet>
  <SheetTrigger asChild>
  <button className=" border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full h-8 w-8 ml-[17rem] mt-8
  xs:ml-[309px] smCustom:ml-[360px] sm:ml-[580px] md:ml-[43rem] lg:hidden">
  <HiMiniAdjustmentsVertical className="size-5 ml-1.5"/>
  </button>
  </SheetTrigger>
  <SheetContent side="bottom" className="bg-white h-[34rem] rounded-t-xl">
    <h1 className="font-bold text-lg -mt-4">Filters</h1>
    <hr className="w-72 mx-auto mt-1 smCustom:w-[23.9rem] smCustom:mx-0 sm:w-[37rem] md:w-[45rem]"></hr>
    <div className="flex justify-between mt-2">
      <p className="text-slate-600 text-sm">T-shirts</p>
      <MdChevronRight className="text-gray-600 size-5  -mr-3" />
  </div>
  <div className="flex justify-between mt-1">
  <p className="text-slate-600 text-sm">Shorts</p>
  <MdChevronRight className="text-gray-600 size-5  -mr-3"/>
  </div>
  <div className="flex justify-between mt-1">
  <p className="text-slate-600 text-sm">Shirts</p>
  <MdChevronRight className="text-gray-600 size-5  -mr-3"/>
  </div>
  <div className="flex justify-between mt-1">
  <p className="text-slate-600 text-sm">Hoodie</p>
  <MdChevronRight className="text-gray-600 size-5  -mr-3"/>
  </div>
  <div className="flex justify-between mt-1">
  <p className="text-slate-600 text-sm">Jeans</p>
  <MdChevronRight className="text-gray-600 size-5 -mr-3"/>
  </div>
  <hr className="w-72 mx-auto mt-2 smCustom:w-[23.9rem] smCustom:mx-0 sm:w-[37rem] md:w-[45rem]"></hr>
  <div className="flex justify-between mt-1">
  <h1 className="text-lg font-bold">Price</h1>
  <FaAngleUp  className="size-5 -mr-2"/>
  </div>
  <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div className="w-56 -mt-[30rem] sm:w-96">
        <Slider min={50} max={200} step={10}/>
      </div>
    </div>
  <hr className="w-72 mx-auto -mt-[30rem] smCustom:w-[23.9rem] smCustom:mx-0 md:w-[45rem]"></hr>
  <div className="flex justify-between mt-1">
    <h1 className="text-lg font-bold">Colors</h1>
    <FaAngleUp  className="size-5 -mr-2"/>
  </div>
  <div className="grid grid-cols-5 mx-2 gap-y-1 sm:ml-12">
    <FaCircle className="size-8 text-green-500 smCustom:size-10" />
    <FaCircle className="size-8 text-red-600 smCustom:size-10"/>
    <FaCircle className="size-8 text-yellow-400 smCustom:size-10"/>
    <FaCircle className="size-8 text-orange-600 smCustom:size-10"/>
    <FaCircle className="size-8 text-sky-400 smCustom:size-10"/>
    <FaCircleCheck className="size-8 text-blue-800 smCustom:size-10"/>
    <FaCircle className="size-8 text-purple-700 smCustom:size-10"/>
    <FaCircle className="size-8 text-pink-500 smCustom:size-10"/>
    <FaCircle className="size-8 text-white border border-slate-300 rounded-full smCustom:size-10"/>
    <FaCircle className="size-8 text-black smCustom:size-10"/>
  </div>
  <hr className="w-72 mx-auto mt-2 smCustom:w-[23.9rem] smCustom:mx-0 md:w-[45rem]"></hr>
  <div className="flex justify-between mt-1">
  <h1 className="text-lg font-bold">Size</h1>
    <FaAngleUp  className="size-5"/>
  </div>
  <div className="grid grid-cols-3 mt-1 gap-y-1.5 sm:ml-6">
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-8 w-20 smCustom:w-28 sm:w-36 md:w-44">X-Small</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-8 w-20 smCustom:w-28 sm:w-36 md:w-44">Small</button> 
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-8 w-20 smCustom:w-28 sm:w-36 md:w-44">Medium</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-8 w-20 smCustom:w-28 sm:w-36 md:w-44">Large</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-8 w-20 smCustom:w-28 sm:w-36 md:w-44">X-Large</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-8 w-20 smCustom:w-28 sm:w-36 md:w-44">XX-Large</button>
    </div>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-xs 
  h-9 w-44 mt-2 ml-12 xs:ml-[5rem] smCustom:mt-1.5 smCustom:ml-[6rem] sm:w-80 sm:ml-[8rem] md:ml-[10rem] md:w-96">
  Apply Filter
  </button>
  </SheetContent>
</Sheet>
</div> 
                         {/* the page */}
                         
                         <div className="flex ml-3 text-sm font-light -mt-14 lg:mt-3 lg:ml-20 xl:ml-24">
                          <Link href="/"><h1 className="text-slate-600">Home</h1></Link>
                          <MdOutlineChevronRight className="size-4 text-slate-700 mt-0.5"/>
                          <h1>Casual</h1>
                         </div>
                         {/* filter's container on left side (lg:screen)*/}
                         <div className="lg:flex">
                         <div className="hidden lg:block container border border-gray-200 rounded-2xl w-56 h-[1080px] mt-5 ml-20 xl:w-64
                         xl:ml-24">
                          <div className="flex justify-between mt-2 mx-3">
                         <h1 className="font-bold text-lg">Filters</h1>
                         <HiMiniAdjustmentsVertical className="size-5 mt-1 text-gray-500"/>
                         </div>

    <hr className="w-44 mx-auto mt-4 xl:w-56"></hr>
    <div className="flex justify-between mt-4 mx-3 font-light">
      <p className="text-gray-500 text-sm">T-shirts</p>
      <MdChevronRight className="text-gray-500 size-5" />
  </div>
  <div className="flex justify-between mt-3 mx-3 font-light">
  <p className="text-gray-500 text-sm">Shorts</p>
  <MdChevronRight className="text-gray-500 size-5"/>
  </div>
  <div className="flex justify-between mt-3 mx-3 font-light">
  <p className="text-gray-500 text-sm">Shirts</p>
  <MdChevronRight className="text-gray-500 size-5"/>
  </div>
  <div className="flex justify-between mt-3 mx-3 font-light">
  <p className="text-gray-500 text-sm">Hoodie</p>
  <MdChevronRight className="text-gray-500 size-5"/>
  </div>
  <div className="flex justify-between mt-3 mx-3 font-light">
  <p className="text-gray-500 text-sm">Jeans</p>
  <MdChevronRight className="text-gray-500 size-5"/>
  </div>
  <hr className="w-44 mx-auto mt-5 xl:w-56"></hr>
  <div className="flex justify-between mt-3 mx-3">
  <h1 className="text-lg font-bold">Price</h1>
  <FaAngleUp  className="size-5 "/>
  </div>
  <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div className="w-40 -mt-[28rem] mr-4 xl:-mt-[35rem]">
        <Slider min={50} max={200} step={10}/>
      </div>
    </div>
  <hr className="w-44 mx-auto -mt-[28rem] xl:-mt-[35rem] xl:w-56"></hr>
  <div className="flex justify-between mt-3 mx-3">
    <h1 className="text-lg font-bold">Colors</h1>
    <FaAngleUp  className="size-5"/>
  </div>
  <div className="grid grid-cols-5 gap-x-0.5 mt-3 mx-3 gap-y-2">
    <FaCircle className="size-8 text-green-500" />
    <FaCircle className="size-8 text-red-600"/>
    <FaCircle className="size-8 text-yellow-400"/>
    <FaCircle className="size-8 text-orange-600"/>
    <FaCircle className="size-8 text-sky-400"/>
    <FaCircleCheck className="size-8 text-blue-800"/>
    <FaCircle className="size-8 text-purple-700"/>
   <FaCircle className="size-8 text-pink-500"/>
   <FaCircle className="size-8 text-white border border-slate-300 rounded-full"/>
   <FaCircle className="size-8 text-black"/>
  </div>
  <hr className="w-44 mx-auto mt-5 xl:w-56"></hr>
  <div className="flex justify-between mt-3 mx-3">
    <h1 className="text-lg font-bold">Size</h1>
    <FaAngleUp  className="size-5"/>
  </div>
  <div className="grid grid-cols-2 mt-3 mx-3 gap-y-2 xl:mx-4 xl:gap-x-2">
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-9 w-20">XX-Small</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-9 w-20">X-Small</button> 
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-9 w-20">Small</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-9 w-20">Medium</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-9 w-20">Large</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-9 w-20">X-Large</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-9 w-20">XX-Large</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-9 w-20">3X-Large</button>
    <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
    h-9 w-20">4X-Large</button>
  </div>
  <hr className="w-44 mx-auto mt-5 xl:w-56"></hr>
  <div className="flex mt-2 mx-3">
  <h1 className="text-lg font-bold">Dress Style</h1>
  <FaAngleUp  className="size-5 mt-1 ml-12 xl:ml-[105px]"/>
  </div>
  <div className="flex justify-between mt-4 mx-3 font-light">
  <p className="text-slate-600 text-base">Casual</p>
  <MdChevronRight className="text-gray-600 size-5"/>
  </div>
  <div className="flex justify-between mt-4 mx-3 font-light">
  <p className="text-slate-600 text-base">Formal</p>
  <MdChevronRight className="text-gray-600 size-5"/>
  </div>
  <div className="flex justify-between mt-4 mx-3 font-light">
  <p className="text-slate-600 text-base">Party</p>
  <MdChevronRight className="text-gray-600 size-5"/>
  </div>
  <div className="flex justify-between mt-4 mx-3 font-light">
  <p className="text-slate-600 text-base">Gym</p>
  <MdChevronRight className="text-gray-600 size-5"/>
  </div>
  <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-xs 
  h-10 w-44 mx-3 mt-5 xl:w-52 xl:h-11">
  Apply Filter
  </button>
</div>
                         {/* casual dresses on right side (lg:screen) */}
                         <div className="">
                         <div className="flex gap-2 ml-3 mt-1">
                          <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl lg:ml-3 xl:ml-2">Casual</h1>
                          <p className="text-xs mt-2 font-light sm:mt-3 lg:text-sm text-gray-500 xl:ml-[22rem]">
                            Showing 1-10 of 100 Products</p>
                          <p className="hidden lg:block font-light text-sm ml-4 text-gray-500 mt-3">Sort by:</p>
                          <p className="hidden lg:block font-medium text-sm mt-3">Most Popular</p>
                          <FaAngleDown className="hidden lg:block mt-4 size-4 xl:-ml-1" />
                         </div>
                         {/* first three images */}
                         <div className="flex justify-around mx-2 mt-5 xs:mx-0 xs:-ml-2 lg:ml-0 lg:mr-3 lg:mt-5 xl:mr-0 xl:ml-5 xl:gap-9">
                          <Image className="w-36 h-36 border rounded-xl smCustom:w-40 smCustom:h-40 sm:w-44 sm:h-44 md:w-52 md:h-52
                          lg:h-48 lg:w-48 xl:h-64 xl:w-64"
                          src="/images/shirt2.png"
                          alt="shirt"
                          height={800} 
                          width={800}
                          />
                          <Image className="border rounded-xl h-36 w-36 smCustom:w-40 smCustom:h-40 sm:w-44 sm:h-44 md:w-52 md:h-52
                          lg:h-48 lg:w-48 xl:h-64 xl:w-64"
                          src="/images/shirt3.png"
                          alt="shirt"
                          height={800} 
                          width={800}
                          />
                          <Image className="hidden sm:block w-44 h-44 border rounded-xl md:w-52 md:h-52 mr-3 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
                          src="/images/shirt4.png"
                          alt="shirt"
                          height={800} 
                          width={800}
                          />
                          </div>
                        <div className="flex text-sm font-semibold mt-2 md:text-base xl:text-lg">
                        <h1 className="ml-4 lg:ml-5 xl:ml-6"> Gradient Graphic T-shirt </h1>
                        <h1 className="xs:ml-6 smCustom:ml-14 md:ml-20 lg:ml-14 xl:ml-[5.6rem]">Polo with Tipping Details</h1>
                        <h1 className="hidden sm:block ml-12 md:ml-[4rem] xl:ml-[5rem]">Black Striped T-shirt</h1>
                        </div>
                        <div className="flex mt-1">
                        <div className="flex text-yellow-500 ml-4 lg:ml-5 xl:ml-6">
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStarHalf className="size-3 md:size-4"/>
                                   <p className=" text-black text-xs ml-1 md:text-sm">3.5/</p>
                                   <p className=" text-gray-400 text-xs md:text-sm">5</p>
                        </div>
                        <div className="flex text-yellow-500 ml-[4.3rem] xs:ml-[6.6rem] smCustom:ml-[8.5rem] sm:ml-[138px] md:ml-[165px]
                        lg:ml-[140px] xl:ml-[195px]">
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStarHalf className="size-3 md:size-4"/>
                                   <p className=" text-black text-xs ml-1 md:text-sm">4.5/</p>
                                   <p className=" text-gray-400 text-xs md:text-sm">5</p>
                        </div>
                        <div className="flex text-yellow-500 ml-[8.6rem] sm:ml-[7.7rem] md:ml-[8.3rem] xl:ml-[11.2rem]">
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <p className="hidden sm:block text-black text-xs ml-2 md:text-sm">5.0/</p>
                                   <p className="hidden sm:block text-gray-400 text-xs md:text-sm">5</p>
                        </div>
                        </div>
                        <div className="flex mx-4 font-bold md:text-xl xl:text-2xl">
                        <p className="lg:ml-2"> $145 </p>
                        <s className="text-gray-400 ml-1 sm:hidden">$242</s>
                        <button className="border-red-200 rounded-full w-12 h-5 text-xs bg-red-100
                        text-red-900 font-light mt-1 ml-2 sm:hidden">-20%</button>
                        <p className="ml-4 xs:ml-14 smCustom:ml-20 sm:ml-[11.4rem] md:ml-[13.8rem] lg:ml-[12rem] xl:ml-[15.2rem]">$180</p>
                        <s className="text-gray-400 ml-1 sm:hidden">$242</s>
                        <button className="border-red-200 rounded-full w-12 h-5 text-xs bg-red-100
                        text-red-900 font-light mt-1 ml-2 smCustom:mr-3 sm:hidden ">-20%</button>
                        <p className="hidden sm:block ml-44 md:ml-52 xl:ml-[14.9rem]">$120</p>
                        <s className="hidden sm:block text-gray-400 ml-1">$150</s>
                        <button className="hidden sm:block border-red-200 rounded-full w-12 h-5 text-xs bg-red-100
                        text-red-900 font-light mt-1 ml-2">-20%</button>
                        </div>
                        {/* Second last images */}
                        <div className="flex justify-around mx-2 mt-4 sm:mx-0 xl:ml-6 xl:gap-8">
                        <Image className="w-36 h-36 border rounded-xl sm:hidden xs:mx-0 xs:-ml-4 smCustom:w-40 smCustom:h-40"
                        src="/images/shirt4.png"
                        alt="jeans" height={700} width={700}/>
                        <Image className="w-36 h-36 border rounded-xl xs:-mr-2 smCustom:w-40 smCustom:h-40 sm:w-44 sm:h-44 sm:-ml-2
                        md:w-52 md:h-52 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
                        src="/images/arrival2.png"
                        alt="jeans" height={700} width={700}/>
                        <Image className="hidden sm:block border rounded-xl w-44 h-44 md:w-52 md:h-52 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
                        src="/images/arrival3.png"
                        alt="jeans" height={700} width={700}/>
                        <Image className="hidden sm:block  border rounded-xl w-44 h-44 md:w-52 md:h-52 mr-3 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
                        src="/images/arrival4.png"
                        alt="jeans" height={700} width={700}/>
                        </div>
                        <div className="flex font-semibold text-sm justify-around mt-2 smCustom:mr-14 sm:mr-0 md:text-base xl:text-lg">
                <p className="ml-2 xs:mr-8 smCustom:mr-14 sm:hidden">Black Striped T-shirt</p>
                <p className="mr-7 xs:mr-12 smCustom:mr-2 sm:-ml-9 md:-ml-[3rem] lg:-ml-[2.5rem] xl:-ml-[3.4rem]">Skinny Fit Jeans</p>
                <p className="hidden sm:block md:-ml-1 lg:-ml-3 xl:-ml-4">Checkered Shirt</p>
                <p className="hidden sm:block -mr-3">Sleeve Striped T-Shirt</p>
                        </div>
                        <div className="flex mt-1">
                        <div className="flex text-yellow-500 ml-4">
                                   <FaStar className="size-3 sm:hidden"/>
                                   <FaStar className="size-3 sm:hidden"/>
                                   <FaStar className="size-3 sm:hidden"/>
                                   <FaStar className="size-3 sm:hidden"/>
                                   <p className=" text-black text-xs ml-1 sm:hidden">4.0/</p>
                                   <p className=" text-gray-400 text-xs sm:hidden">5</p>
                        </div> 
                        <div className="flex text-yellow-500 ml-[4.7rem] xs:ml-[6.8rem] smCustom:ml-[8.7rem] sm:ml-0 lg:ml-1.5">
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStar className="size-3 md:size-4"/>
                                   <FaStarHalf className="size-3 md:size-4"/>
                                   <p className=" text-black text-xs ml-1 md:text-sm">3.5/</p>
                                   <p className=" text-gray-400 text-xs md:text-sm">5</p>
                        </div> 
                        <div className="flex text-yellow-500 sm:ml-[8.7rem] md:ml-[10.4rem] lg:ml-[9.1rem] xl:ml-[12rem]">
                                   <FaStar className="size-3 hidden sm:block md:size-4"/>
                                   <FaStar className="size-3 hidden sm:block md:size-4"/>
                                   <FaStar className="size-3 hidden sm:block md:size-4"/>
                                   <FaStar className="size-3 hidden sm:block md:size-4"/>
                                   <FaStarHalf className="size-3 hidden sm:block md:size-4"/>
                                   <p className="hidden sm:block text-black text-xs md:text-sm">4.5/</p>
                                   <p className="hidden sm:block text-gray-400 text-xs md:text-sm">5</p>
                        </div>
                        <div className="flex text-yellow-500 ml-[8rem] md:ml-[9rem] lg:ml-[8.7rem] xl:ml-[11.5rem]">
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStarHalf className="hidden lg:block size-3 md:size-4"/>
                                   <p className="hidden sm:block text-black text-xs ml-1 md:text-sm">4.5/</p>
                                   <p className="hidden sm:block text-gray-400 text-xs md:text-sm">5</p>
                        </div>
                        </div>
                        <div className="flex font-bold ml-4 lg:text-xl xl:text-2xl">
                        <p className="sm:hidden">$120</p>
                        <s className="text-gray-400 ml-1 sm:hidden">$150</s>
                        <button className="border-red-200 rounded-full w-12 h-5 text-xs bg-red-100 text-red-900 ml-1 mt-1 
                        font-light sm:hidden">
                          -30%</button>
                        <p className="ml-8 xs:ml-16 smCustom:ml-24 sm:ml-0 lg:ml-1.5">$240</p>
                        <s className="text-gray-400 ml-1">$260</s>
                        <button className="border-red-200 rounded-full w-12 h-5 text-xs bg-red-100 text-red-900 ml-1 mt-1 
                        font-light">
                          -20%</button>  
                        <p className="hidden sm:block ml-20 md:ml-32 lg:ml-[5.6rem] xl:ml-[7rem]">$180</p>
                        <p className="hidden sm:block ml-44 md:ml-56 lg:ml-[12.8rem] xl:ml-[15rem]">$130</p>
                        <s className="hidden sm:block text-gray-400 ml-1">$160</s>
                        <button className="hidden sm:block border-red-200 rounded-full w-12 h-5 text-xs bg-red-100 text-red-900 
                        font-light mt-1 ml-2 lg:mt-1.5">-30%</button>
                        </div>
                        {/* last images */}
                        <div className="flex justify-around mx-2 mt-4 sm:mx-0 xl:ml-5 xl:gap-8 xl:text-lg">
                          <Image className="w-36 h-36 border rounded-xl xs:-ml-3 smCustom:w-40 smCustom:h-40 sm:hidden"
                          src="/images/arrival3.png" 
                          alt="shirt" height={1000} width={1000}/>
                          <Image className="w-36 h-36 border rounded-xl xs:-mr-2 smCustom:w-40 smCustom:h-40 sm:hidden"
                          src="/images/arrival4.png" 
                          alt="shirt" height={1000} width={1000}/>
                          <Image className="hidden sm:block border rounded-xl h-44 w-44 md:w-52 md:h-52 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
                          src="/images/sell1.png" 
                          alt="shirt" height={1000} width={1000}/>
                          <Image className="hidden sm:block border rounded-xl h-44 w-44 md:w-52 md:h-52 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
                          src="/images/sell2.png" 
                          alt="shirt" height={1000} width={1000}/>
                          <Image className="hidden sm:block border rounded-xl h-44 w-44 md:w-52 md:h-52 mr-3 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
                          src="/images/sell3.png" 
                          alt="shirt" height={1000} width={1000}/>
                        </div>
                        <div className="flex text-sm font-semibold ml-2 mt-2 md:text-base xl:text-lg">
                        <p className="sm:hidden ml-2 smCustom:ml-3">Checkered Shirt</p>
                        <p className="sm:hidden ml-10 xs:ml-20 smCustom:ml-28">Sleeve Striped T-Shirt</p>
                        <p className="hidden sm:block ml-3 lg:ml-4">Vertical Striped Shirt</p>
                        <p className="hidden sm:block ml-20 md:ml-[6.6rem] lg:ml-[5.6rem] xl:ml-[7rem]"> Courage Graphic T-Shirt</p>
                        <p className="hidden sm:block ml-12 md:ml-16 xl:ml-[5.5rem]">Loose Fit Bermuda Shorts</p>
                        </div>
                        <div className="flex">
                        <div className="flex text-yellow-500 ml-4 mt-1 smCustom:ml-5">
                                   <FaStar className="sm:hidden size-3"/>
                                   <FaStar className="sm:hidden size-3"/>
                                   <FaStar className="sm:hidden size-3"/>
                                   <FaStar className="sm:hidden size-3"/>
                                   <FaStarHalf className="sm:hidden size-3"/>
                                   <p className="sm:hidden text-black text-xs ml-1 md:text-sm">4.5/</p>
                                   <p className="sm:hidden text-gray-400 text-xs md:text-sm">5</p>
                        </div>
                        <div className="flex text-yellow-500 ml-[4.3rem] mt-1 xs:ml-[6.8rem] smCustom:ml-[8.9rem]">
                                   <FaStar className="sm:hidden size-3"/>
                                   <FaStar className="sm:hidden size-3"/>
                                   <FaStar className="sm:hidden size-3"/>
                                   <FaStar className="sm:hidden size-3"/>
                                   <FaStarHalf className="sm:hidden size-3"/>
                                   <p className="sm:hidden text-black text-xs ml-1 md:text-sm">4.5/</p>
                                   <p className="sm:hidden text-gray-400 text-xs md:text-sm">5</p>
                        </div>
                        <div className="flex text-yellow-500 mt-1 -ml-36 lg:-ml-[8.7rem]">
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <p className="hidden sm:block text-black text-xs ml-1">5.0/</p>
                                   <p className="hidden sm:block text-gray-400 text-xs">5</p>
                        </div>
                        <div className="flex text-yellow-500 mt-1 ml-32 md:ml-[9.6rem] lg:ml-[8.6rem] xl:ml-[11.2rem]">
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <p className="hidden sm:block text-black text-xs ml-1 md:text-sm">4.0/</p>
                                   <p className="hidden sm:block text-gray-400 text-xs md:text-sm">5</p>
                        </div>
                        <div className="flex text-yellow-500 mt-1 ml-[9.5rem] sm:ml-[8.2rem] md:ml-[9.4rem] lg:ml-[9.3rem] xl:ml-[12.5rem]">
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <FaStar className="hidden sm:block size-3 md:size-4"/>
                                   <p className="hidden sm:block text-black text-xs ml-1 md:text-sm">3.0/</p>
                                   <p className="hidden sm:block text-gray-400 text-xs md:text-sm">5</p>
                        </div>
                        </div>
                        <div className="flex font-bold lg:text-xl xl:text-2xl">
                        <p className="sm:hidden ml-4 smCustom:ml-5">$180</p>
                        <p className="ml-28 sm:hidden xs:ml-[9.5rem] smCustom:ml-[11.5rem]">$130</p>
                        <s className=" text-gray-400 ml-0.5 sm:hidden">$160</s>
                        <button className="sm:hidden border-red-200 rounded-full w-10 h-5 text-xs bg-red-100 text-red-900 
                        font-light mt-1 ml-2">-30%</button>
                        <p className="hidden sm:block ml-5 lg:ml-6">$212</p>
                        <s className="hidden sm:block text-gray-400">$232</s>
                        <button className="hidden sm:block border-red-200 rounded-full w-10 h-5 text-xs bg-red-100 text-red-900 
                        font-light mt-1 ml-2">-20%</button>
                        <p className="hidden sm:block ml-[5.8rem] md:ml-[8.9rem] lg:ml-[6.7rem] xl:ml-[8rem]">$145</p>
                        <p className="hidden sm:block ml-44 md:ml-[13.5rem] lg:ml-[12.7rem] xl:ml-[15.2rem]">$80</p>
                        </div>
                        <hr className="w-[17.99rem] mx-auto mt-4 xs:w-[21rem] xs:mr-6 smCustom:w-[22.9rem] smCustom:mr-8
                        sm:w-[36.9rem] sm:mr-6 md:w-[44.9rem] lg:w-[41.6rem] lg:mr-8 xl:w-[51rem]"></hr>
                        <div className="flex gap-2 mt-2 text-sm xs:gap-5 smCustom:gap-6 smCustom:ml-3 sm:gap-4 sm:ml-3 md:gap-4 lg:gap-3">
                        <Link href="/detail">
                          <button className="w-[4.99rem] h-8 border border-gray-200 bg-white hover:bg-gray-200 hover:text-black 
                          text-black rounded-lg flex items-center ml-4 lg:w-[5.5rem] lg:h-9 lg:ml-3">
                          <HiOutlineArrowSmLeft className="size-4 lg:ml-1" />
                          Previous
                          </button></Link>
                          <button className="hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8 smCustom:ml-4 sm:ml-9 md:ml-24
                          lg:ml-20 xl:ml-36">
                          1</button>
                          <button className="hidden sm:block hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                          2</button>
                          <button className="hidden sm:block hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                          3</button>
                          <Ellipsis className="hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-10 size-1"/>
                          <button className="hidden sm:block hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                          8</button>
                          <button className="hidden sm:block hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                          9</button>
                          <button className="hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                          10</button>
                          <Link href="/detail">
                          <button className="border border-gray-200 hover:bg-gray-200 bg-white rounded-lg h-8 w-14 ml-3 pr-4
                          sm:ml-14 md:ml-[7.7rem] lg:ml-[6.5rem] lg:w-16 lg:h-9 xl:ml-[11.9rem]">
                          Next
                          <HiOutlineArrowSmRight className="size-4 ml-9 -mt-4 lg:-mt-[17px] lg:ml-10"/>
                          </button></Link>
                        </div>
                        </div>
                        </div>
        </main>
        </>
    )

}