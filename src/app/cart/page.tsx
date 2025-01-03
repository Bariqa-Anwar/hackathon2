import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import {MousePointer2} from "lucide-react";
import { ArrowRight } from "lucide-react";


export default function Cart (){
    return(
        <>
        <main className="overflow-x-hidden max-w-screen-2xl mx-auto">
            <hr></hr>
        <div className="flex text-sm font-light ml-3 gap-1 mt-4 lg:ml-20">
            <Link href="/"><h1 className="text-gray-600">Home</h1></Link>
            <ChevronRight className="text-gray-600 size-4 mt-0.5"/>
            <h1>Cart</h1>
        </div>
        <h1 className="text-4xl font-sans font-extrabold ml-3 mt-3 lg:text-5xl lg:ml-20">YOUR CART</h1>
            {/* Images with details */}
            <div className="lg:flex lg:justify-between">
            <div className="flex flex-col container border border-gray-200 rounded-2xl w-72 h-[470px] mx-4 mt-4 xs:w-[340px] 
            smCustom:w-[390px] sm:w-[610px] sm:h-[530px] md:w-[730px] md:h-[620px] lg:w-[600px] lg:h-[440px] lg:ml-20 xl:w-[720px]">
                <div className="flex">
                <div>
                    <Image className="w-32 h-32 mt-2 ml-2 sm:h-36 sm:w-40 sm:ml-3 sm:mt-3 md:w-52 md:h-44 lg:h-28 lg:w-28"
                    src="/images/shirt2.png"
                    alt="shirt"
                    height={800}
                    width={800}
                    />
                    </div>
                    <div className="mt-2 ml-3 xs:ml-2">
                    <h1 className=" font-semibold text-sm sm:text-lg md:text-2xl md:mt-1 lg:text-lg">Gradient Graphic T-shirt</h1>
                    <RiDeleteBin6Fill className=" text-red-600 size-5 ml-[123px] -mt-4 xs:ml-[168px] xs:-mt-5 smCustom:ml-[215px]
                    sm:ml-96 md:size-6 md:ml-[465px] md:-mt-8 lg:size-5 lg:ml-[380px] lg:-mt-6 xl:ml-[550px]"/>
                    <div className="flex text-xs mt-1 xs:mt-3 md:text-sm lg:text-xs xl:">
                    <p>Size:</p> 
                    <p className="text-gray-500"> Large</p>
                    </div>
                    <div className="flex text-xs mt-0.5 md:text-sm lg:text-xs">
                    <p>Color:</p>
                    <p className="text-gray-500"> White</p>
                    </div>
                    <p className="font-semibold text-base mt-5 sm:mt-11 md:text-xl md:mt-14 lg:text-base lg:mt-6">$145</p>
                    <button className="border-gray-200 flex items-center justify-center gap-3 bg-gray-200 hover:bg-black
                     hover:text-white rounded-full text-xs h-6 w-20 px-1 ml-[65px] -mt-6 md:h-9 md:w-32 md:flex md:justify-around
                     md:-mt-8 md:ml-[365px] md:text-sm lg:h-7 lg:w-28 lg:ml-72 xl:ml-[460px]">
            <FiMinus/>1<FaPlus /></button>
            </div>
                </div>
                <div className="flex mt-6">
                <div>
                    <Image className="w-32 h-32 mt-2 ml-2 rounded-xl sm:h-36 sm:w-40 sm:ml-3 sm:mt-3 md:w-52 md:h-44 lg:h-28 lg:w-28"
                    src="/images/arrival3.png"
                    alt="shirt"
                    height={800}
                    width={800}
                    />
                    </div>
                    <div className="mt-2 ml-3">
                    <h1 className=" font-semibold text-sm sm:text-lg md:text-2xl md:mt-1 lg:text-lg">Checkered Shirt</h1>
                    <RiDeleteBin6Fill className=" text-red-600 size-5 ml-[115px] -mt-5 xs:ml-[165px] smCustom:ml-[210px] sm:ml-96 
                    md:size-6 md:ml-[465px] md:-mt-8 lg:size-5 lg:ml-[380px] lg:-mt-6 xl:ml-[550px]"/>
                    <div className="flex text-xs mt-3 md:text-sm lg:text-xs">
                    <p>Size:</p> 
                    <p className="text-gray-500"> Medium</p>
                    </div>
                    <div className="flex text-xs mt-0.5 md:text-sm lg:text-xs">
                    <p className="">Color:</p>
                    <p className="text-gray-500"> Red</p>
                    </div>
                    <p className="font-semibold text-base mt-8 sm:mt-11 md:text-xl md:mt-14 lg:text-base lg:mt-6">$180</p>
                    <button className="border-gray-200 flex items-center justify-center gap-3 bg-gray-200 hover:bg-black hover:text-white
             rounded-full text-xs h-6 w-20 px-1 ml-14 -mt-6 md:h-9 md:w-32 md:flex md:justify-around md:-mt-8 md:ml-[360px] md:text-sm
             lg:h-7 lg:w-28 lg:ml-72 xl:ml-[460px]">
            <FiMinus/>1<FaPlus /></button>
            </div>
                </div>
                <div className="flex mt-6">
                <div>
                    <Image className="w-32 h-32 mt-2 ml-2 rounded-xl sm:h-36 sm:w-40 sm:ml-3 md:w-52 md:h-44 lg:h-28 lg:w-28"
                    src="/images/arrival2.png"
                    alt="shirt"
                    height={800}
                    width={800}
                    />
                    </div>
                    <div className="mt-2 ml-3">
                    <h1 className=" font-semibold text-sm sm:text-lg md:text-2xl md:mt-1 lg:text-lg">Skinny Fit Jeans</h1>
                    <RiDeleteBin6Fill className=" text-red-600 size-5 ml-[115px] -mt-5 xs:ml-[165px] smCustom:ml-[210px] sm:ml-96
                    md:size-6 md:ml-[465px] md:-mt-8 lg:size-5 lg:ml-[380px] lg:-mt-6 xl:ml-[550px]"/>
                    <div className="flex text-xs mt-1 sm:mt-3 md:text-sm lg:text-xs">
                    <p>Size:</p> 
                    <p className="text-gray-500"> Large</p>
                    </div>
                    <div className="flex text-xs mt-0.5 md:text-sm lg:text-xs">
                    <p className="">Color:</p>
                    <p className="text-gray-500"> Blue </p>
                    </div>
                    <p className="font-semibold text-base mt-11 sm:mt-11 md:text-xl md:mt-14 lg:text-base lg:mt-6">$240</p>
                    <button className="border-gray-200 flex items-center justify-center gap-3 bg-gray-200 hover:bg-black hover:text-white
             rounded-full text-xs h-6 w-20 px-1 ml-14 -mt-6 md:h-9 md:w-32 md:flex md:justify-around md:-mt-8 md:ml-[360px] md:text-sm
             lg:h-7 lg:w-28 lg:ml-72 xl:ml-[460px]">
            <FiMinus/>1<FaPlus /></button>
            </div>
                </div>
                
            </div>
            {/* Order Summary */}
            <div className="lg:flex">
                <div className="container border border-gray-200 rounded-2xl w-72 h-[320px] mx-4 mt-4 xs:w-[340px] smCustom:w-[390px]
                sm:w-[610px] md:w-[730px] md:h-[340px] lg:h-[320px] lg:w-80 lg:mr-12 xl:mr-32 xl:w-96">
                    <h1 className="font-bold text-lg mt-5 ml-3 sm:text-xl md:text-2xl lg:text-lg xl:text-2xl">Order Summary</h1>
                    <div className="flex justify-between mx-3 mt-2 text-sm md:text-base lg:text-sm">
                        <p className="text-gray-500">Subtotal</p>
                        <p className="font-bold hover:text-red-600">$565</p>
                    </div>
                    <div className="flex justify-between mx-3 mt-2 text-sm md:text-base lg:text-sm">
                        <p className="text-gray-500">Discount {`(-20%)`}</p>
                        <p className="font-bold hover:text-red-600">-$113</p>
                    </div>
                    <div className="flex justify-between mx-3 mt-2 text-sm md:text-base lg:text-sm">
                        <p className="text-gray-500">Delivery Fee</p>
                        <p className="font-bold hover:text-red-600">$15</p>
                    </div>
                    <hr className="w-60 mx-auto mt-4 sm:w-[550px] lg:w-72 xl:w-80"></hr>
                    <div className="flex justify-between mx-3 mt-4 md:text-xl lg:text-lg">
                        <p className="font-light">Total</p>
                        <p className="font-bold">$467</p>
                    </div>
                    <div className="flex gap-2 mt-5 ml-2 xs:ml-3 sm:ml-28 md:flex md:ml-0 lg:gap-0">
                    <MousePointer2 className="size-4 text-gray-400 absolute left-7 mt-3 xs:left-8 sm:left-36 md:size-5 md:left-10 md:mt-2
                    lg:size-4 lg:left-[680px] xl:left-[860px]"/>
                        <input className="placeholder-gray-400 border border-gray-200 rounded-full bg-gray-200
                        h-10 w-36 px-4 placeholder:text-sm focus:outline-none focus:ring focus:ring-gray-200 xs:w-40 xs:px-5
                        smCustom:w-48 sm:pl-9 md:w-[750px] md:ml-3 md:placeholder:text-base lg:w-48 lg:h-9 lg:placeholder:text-sm lg:pl-7
                        xl:w-56"
                        type="text"
                        placeholder="Add promo code"/>
                        <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm 
                        h-10 w-24 ml-6 xs:w-32 xs:mr-3 smCustom:w-40 md:w-56 md:text-base lg:text-sm lg:w-24 lg:h-9 xl:w-28">
                            Apply
                        </button>
                    </div>
                    <button className="flex gap-1 border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm
                    h-10 w-[270px] mt-3 mx-auto text-gray-500 pl-20 py-3 xs:w-[315px] xs:pl-24 smCustom:w-[360px] smCustom:pl-28
                    sm:w-96 sm:pl-28 md:w-[700px] md:h-12 md:text-base md:pl-64 lg:w-[295px] lg:h-9 lg:pl-20 lg:text-sm lg:py-2
                    xl:w-[360px] xl:px-28">
                        Go to Checkout <ArrowRight className="size-4 mt-0.5 md:size-5 lg:size-4" />
                    </button>

                </div>

            </div>
            </div>
        </main>
        </>
    )
}
