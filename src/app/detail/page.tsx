import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { FaStarHalf  } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { HiAdjustments } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";



export default function Detail(){
    return (
        <>
        <div className="overflow-x-hidden max-w-screen-2xl mx-auto">
            <hr className="text-gray-500 mt-2 w-auto mx-auto"></hr>
            <div className="flex gap-1 text-gray-500 text-xs font-sans mt-5 ml-3 xs:ml-5 sm:ml-32 md:ml-48 lg:ml-14 xl:ml-24 xl:text-base">
                <Link href="/"><p>Home</p></Link>
                <ChevronRight className="h-3.5 w-3.5 mt-0.5 xl:mt-1.5"/>
                <p>Shop</p>
                <ChevronRight className="h-3.5 w-3.5 mt-0.5 xl:mt-1.5"/>
                <p>Men</p>
                <ChevronRight className="h-3.5 w-3.5 mt-0.5 xl:mt-1.5"/>
                T-Shirts
            </div>
            <div className="lg:flex">
            {/* left section on lg screen*/}
           <div>
            {/* for big image */}
            <div>
                <Image className="h-72 w-72 mt-5 mx-auto sm:w-96 sm:h-96 lg:ml-44 xl:h-[470px] xl:w-[450px] xl:mt-7 xl:ml-64"
                src="/images/cartlg.png"
                alt="shirt" height={800} width={800} />
            </div>
            {/* for small images */}
            <div className="flex gap-4 mt-3 ml-6 xs:ml-12 smCustom:ml-[75px] sm:ml-32 sm:gap-6 md:ml-48 lg:flex lg:flex-col lg:ml-12
            lg:-mt-96 xl:-mt-[465px] xl:gap-3 xl:ml-24">
                <Image className="w-20 h-20 sm:h-28 sm:w-28 xl:h-36 xl:w-36"
                src="/images/cart1.png"
                alt="shirt" height={800} width={800}
                />
                <Image className="w-20 h-20 sm:h-28 sm:w-28 xl:h-36 xl:w-36"
                src="/images/cart2.png"
                alt="shirt" height={800} width={800}
                />
                <Image className="w-20 h-20 sm:h-28 sm:w-28 xl:h-36 xl:w-36"
                src="/images/cart3.png"
                alt="shirt" height={800} width={800}
                />
            </div>
            </div>
            {/* item's detail (right section on lg screen )*/}
            <div>
                <h1 className="font-extrabold font-sans mt-4 mx-6 text-2xl smCustom:mx-12 sm:ml-32 md:ml-48 lg:ml-52 lg:text-3xl xl:text-4xl
                xl:ml-60">
                    ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="text-yellow-500 flex ml-6 mt-2 smCustom:ml-12 sm:ml-32 md:ml-48 lg:ml-52 xl:ml-60">
                <FaStar className="xl:size-6"/>
                <FaStar className="xl:size-6"/>
                <FaStar className="xl:size-6"/>
                <FaStar className="xl:size-6"/>
                <FaStarHalf className="xl:size-6"/>
                <p className="text-black text-sm ml-1 xl:text-lg">4.5/</p>
                <p className="text-gray-400 text-sm xl:text-lg">5</p>
            </div>
                <div className="flex ml-6 text-xl mt-2 font-bold smCustom:ml-12 sm:ml-32 md:ml-48 lg:ml-52 xl:ml-60 xl:text-2xl">
                <p>$260</p>
                <s className="text-gray-400 ml-2">$300</s>
                <button className="border-red-200 rounded-full w-10 h-5 text-xs bg-red-100 text-red-700 ml-2 mt-1 
                font-normal xl:text-sm xl:h-6 xl:w-14">-40%
                </button>
                </div>
                <p className="text-gray-600 text-sm font-sans font-normal mx-6 mt-2 smCustom:ml-12 sm:mx-32 md:ml-48 lg:ml-52 xl:mx-60">
                    This graphic t-shirt which is perfect for any occasion. Crafted from a soft and a breathable fabric, it offers
                    superior comfort and style.</p>
                <hr className="text-gray-400 w-[300px] mt-3 mx-auto xs:w-[340px] sm:w-96 lg:ml-48 xl:w-[530px] xl:ml-60"></hr>
                <p className="text-sm text-gray-600 font-sans ml-7 mt-3 smCustom:ml-12 sm:ml-32 md:ml-48 lg:ml-52 xl:ml-60"> 
                    Select Colors </p>
                <div className="flex gap-1 ml-6 mt-3 smCustom:ml-12 sm:ml-32 md:ml-48 lg:ml-52 xl:ml-60">
                <FaCircleCheck className="text-olive size-8"/>
                <RiCheckboxBlankCircleFill className="text-green-950 size-9"/>
                <RiCheckboxBlankCircleFill className="text-blue-950 size-9"/>
                </div>
                <hr className="text-gray-400 w-[300px] mt-3 mx-auto xs:w-[340px] sm:w-96 lg:ml-48 xl:w-[530px] xl:ml-60"></hr>
                <p className="text-sm text-gray-600 font-sans ml-6 mt-4 smCustom:ml-12 sm:ml-32 md:ml-48 lg:ml-52 xl:ml-60">
                    Choose Size</p>
                <div className="flex gap-1 text-sm font-sans text-gray-700 mt-3 ml-3 xs:ml-5 smCustom:ml-12 sm:ml-32 sm:gap-6 md:ml-52
                lg:ml-52 lg:gap-2 xl:ml-60">
                <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-16
                lg:w-20 xl:h-9">
                    Small</button>
                <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20
                lg:w-20 xl:h-9">
                    Medium</button>
                <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-16
                lg:w-20 xl:h-9">
                    Large</button>
                <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20
                lg:w-20 xl:h-9">
                        X-Large</button>
                </div>
                <hr className="text-gray-400 w-[300px] mt-7 mx-auto xs:w-[340px] sm:w-96 lg:ml-48 xl:w-[530px] xl:ml-60"></hr>
           <div className="flex gap-4 sm:gap-20 lg:gap-6">
           <div className="mt-5 ml-3 xs:ml-5 smCustom:ml-12 sm:ml-32 md:ml-48 lg:ml-52 xl:ml-60">
            <button className="border-gray-200 flex items-center justify-center gap-3 bg-gray-200 hover:bg-black hover:text-white
             rounded-full text-sm h-9 w-20 px-1 lg:w-28 lg:gap-6 xl:h-11 xl:w-32 xl:text-lg">
            <FiMinus/>1<FaPlus /></button>
            </div>
            <div>
                <Link href="/cart">
            <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-10 w-48 mt-5
            lg:w-56 xl:h-11 xl:w-96 xl:text-lg">
            Add to Cart</button></Link>
           </div>
           </div>
           </div>
           </div>
           {/* Reviews section */}
           <div className="flex gap-4 ml-3 mt-8 text-gray-500 font-normal text-sm xs:ml-8 smCustom:ml-12 smCustom:gap-7 sm:ml-32
           sm:gap-14 md:ml-36 md:gap-28 lg:gap-56 lg:ml-32 lg:mt-24 xl:text-xl xl:ml-52">
           <button className="hover:text-black hover:underline underline-offset-8">Product Details</button>
           <button className="hover:text-black hover:underline underline-offset-8">Rating & Reviews</button>
           <button className="hover:text-black hover:underline underline-offset-8">FAQs</button>
           </div> 
           <hr className="text-gray-400 w-[300px] mt-1 mx-auto xs:w-[340px] sm:w-96 md:w-[600px] lg:ml-28 lg:w-[800px] xl:w-[1150px] 
           xl:ml-16 xl:mt-0"></hr>
           <div className="flex justify-between xs:mr-9 smCustom:mx-6 sm:mx-28 md:mx-4 lg:mx-16">
           <div className="flex gap-5 ml-4 mt-4 md:mx-16 lg:gap-0 lg:mx-0">
            <h1 className="font-semibold text-lg xs:ml-2 md:text-xl lg:ml-0 xl:text-2xl xl:ml-9"> 
                All Reviews</h1>
            <h1 className="text-xs text-gray-400 -ml-4 mt-2 xs:mr-6 smCustom:mr-9 sm:mr-14 lg:absolute lg:left-52 xl:left-64 xl:mt-3">
                {`(451)`}</h1>
                </div>
                <div className="flex gap-3 mt-4 xl:gap-9">
           <button className=" border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full h-8 w-8
           px-2 xl:h-10 xl:w-10"><HiAdjustments className="w-4 h-4 xl:w-5 xl:h-5"/></button>
            <button className="hidden lg:block border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full h-8 w-24
            text-sm py-1.5 pr-5 xl:h-10 xl:w-28 xl:pr-8 xl:text-base font-medium">
                Latest
                <RiArrowDropDownLine className="w-6 h-6 absolute right-52 -mt-5 lg:right-64 xl:right-[340px]"/>
            </button>
           <button className="text-xs border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full h-8 w-24
           smCustom:mr-10 sm:w-28 lg:text-sm md:mr-20 lg:mr-16 xl:h-10 xl:w-40 xl:text-base">
             Write a Review</button>
           </div> 
           </div>
           {/* feedbacks containers */}
           <div className="md:flex md:justify-around md:mx-8 xl:ml-16">
           <div className="flex flex-col">
           <div className="container border border-gray-200 rounded-2xl mt-5 h-52 w-72 mx-auto sm:w-96 md:w-72 md:h-56 lg:w-96
            xl:w-[550px]">
            {/* First feedback */}
           <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStarHalf />
           </div>
           <div className="flex ml-4 mt-2"> 
            <h1 className="font-bold xl:text-lg"> Samantha D.</h1>
            <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
           </div>
           <p className="text-gray-500 text-sm font-sans ml-3 xl:mt-4">
            {`"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I 
           appreciate the attention to detail. It's become my favorite go-to shirt."`}</p>
           <p className="text-gray-700 text-sm mt-4 ml-3 md:mt-8 lg:mt-12 xl:mt-6"> Posted on August 14, 2023</p>
           </div>
           {/* Second feedback */}
           <div className="container border border-gray-200 rounded-2xl mt-5 h-52 w-72 mx-auto sm:w-96 md:w-72 md:h-56 lg:w-96 xl:w-[550px]">
           <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStarHalf />
           </div>
           <div className="flex ml-4 mt-2"> 
            <h1 className="font-bold xl:text-lg"> Alex M.</h1>
            <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
           </div>
           <p className="text-gray-500 text-sm font-sans ml-3">
            {`"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top notch. Being a UI/UX designer
            myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`}</p>
           <p className="text-gray-700 text-sm mt-4 ml-3 md:mt-8 lg:mt-12 xl:mt-9"> Posted on August 15, 2023</p>
           </div>
           {/* Third feedback */}
           <div className="container border border-gray-200 rounded-2xl mt-5 h-52 w-72 mx-auto sm:w-96 md:w-72 md:h-56 lg:w-96 
           xl:w-[550px]">
           <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStarHalf />
           </div>
           <div className="flex ml-4 mt-2"> 
            <h1 className="font-bold xl:text-lg"> Ethan R.</h1>
            <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
           </div>
           <p className="text-gray-500 text-sm font-sans ml-3">
            {`"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my
            eye, and the fit is perfect. I can see the designer's touch in every aspect of this t-shirt."`}</p>
           <p className="text-gray-600 text-sm mt-4 ml-3 md:mt-8 lg:mt-12 xl:mt-9"> Posted on August 16, 2023</p>
           </div>
           </div>
           {/* Fourth feedback */}
           <div className="flex flex-col xl:mr-20">
           <div className="hidden md:block container border border-gray-200 rounded-2xl mt-5 h-56 w-72 mx-auto lg:w-96 xl:w-[550px]">
           <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStarHalf />
           </div>
           <div className="flex ml-4 mt-2"> 
            <h1 className="font-bold xl:text-lg"> Olivia P.</h1>
            <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
           </div>
           <p className="text-gray-500 text-sm font-sans ml-3">
            {`"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but
            also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`}</p>
           <p className="text-gray-600 text-sm mt-4 ml-3 md:mt-3 lg:mt-12 xl:mt-9"> Posted on August 17, 2023</p>
           </div>
           {/* Fifth feedback */}
           <div className="hidden md:block container border border-gray-200 rounded-2xl mt-5 h-56 w-72 mx-auto lg:w-96 xl:w-[550px]">
           <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStarHalf />
           </div>
           <div className="flex ml-4 mt-2"> 
            <h1 className="font-bold xl:text-lg"> Liam K.</h1>
            <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
           </div>
           <p className="text-gray-500 text-sm font-sans ml-3">
            {`"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's
            skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`}</p>
           <p className="text-gray-600 text-sm mt-4 ml-3 md:mt-8 lg:mt-12 xl:mt-9"> Posted on August 18, 2023</p>
           </div>
           {/* Sixth feedback */}
           <div className="hidden md:block container border border-gray-200 rounded-2xl mt-5 h-56 w-72 mx-auto lg:w-96 xl:w-[550px]">
           <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStarHalf />
           </div>
           <div className="flex ml-4 mt-2"> 
            <h1 className="font-bold xl:text-lg"> Ava H.</h1>
            <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
           </div>
           <p className="text-gray-500 text-sm font-sans ml-3">
            {`"I'm not just wearing a t-shirt; I'm wearning a piece of design philosophy. The intricate details and thoughtful layout
            of the design make this t-shirt a conversation starter."`}</p>
           <p className="text-gray-600 text-sm mt-4 ml-3 md:mt-[52px] xl:mt-14"> Posted on August 19, 2023</p>
           </div>
           </div>
           </div>
           
           {/* Review button */}
           <button className="border rounded-full bg-white text-black font-semibold text-sm w-48 h-10 mx-14 mt-5 xs:mx-24
           smCustom:mx-28 sm:ml-56 md:ml-72 lg:ml-[420px] xl:ml-[540px]">
            Load More Reviews</button>
            {/* Bottom dresses */}
            <h1 className="font-extrabold text-3xl font-sans mt-8 mx-16 xs:mx-24 smCustom:mx-28 sm:ml-36 md:ml-48 md:text-4xl lg:text-5xl
            lg:mx-60 xl:mx-96">
                YOU MIGHT ALSO LIKE</h1>
            <div className="flex justify-around mt-9 sm:justify-center sm:gap-7 lg:gap-8 xl:gap-12 xl:mr-7">
                <Image className="w-36 h-36 border rounded-xl sm:w-44 sm:h-40 md:w-52 md:h-52 xl:h-60 xl:w-60 xl:ml-0"
                src="/images/shirt1.png"
                alt="shirt"
                height={800} 
                width={800}
                />
                <Image className="w-36 h-36 border rounded-xl sm:w-44 sm:h-40 md:w-52 md:h-52 xl:h-60 xl:w-60"
                src="/images/shirt2.png"
                alt="shirt"
                height={800} 
                width={800}
                />
                <Image className="hidden lg:block border rounded-xl h-52 w-52 xl:h-60 xl:w-60"
                src="/images/shirt3.png"
                alt="shirt"
                height={800} 
                width={800}
                />
                <Image className="hidden lg:block w-52 h-52 border rounded-xl xl:h-60 xl:w-60"
                src="/images/shirt4.png"
                alt="shirt"
                height={800} 
                width={800}
                />
            </div>
            <div className="flex font-bold text-sm ml-4 mt-3 xs:gap-4 smCustom:ml-6 sm:ml-32 md:text-base md:ml-40 lg:text-lg
            lg:gap-6 lg:mx-0 xl:gap-12 xl:ml-16">
                    <h1 className="lg:ml-11 xl:ml-14">Polo with Contrast Trims</h1>
                    <h1 className="smCustom:ml-7 lg:ml-1 xl:ml-7"> Gradient Graphic T-shirt </h1>
                    <h1 className="hidden lg:block lg:ml-2 xl:ml-7">Polo with Tipping Details</h1>
                    <h1 className="hidden lg:block lg:ml-3 xl:ml-8">Black Striped T-shirt</h1>
            </div>
            <div className="flex">
            <div className="flex text-yellow-500 ml-4 mt-2 smCustom:ml-5 sm:ml-32 md:ml-40 lg:ml-10 lg:gap-1 xl:ml-28">
           <FaStar className="size-3 md:size-4"/>
           <FaStar className="size-3 md:size-4"/>
           <FaStar className="size-3 md:size-4"/>
           <FaStar className="size-3 md:size-4"/>
           <p className=" text-black text-xs ml-1 md:text-sm">4.0/</p>
           <p className=" text-gray-400 text-xs md:text-sm">5</p>
           </div>
           <div className="flex text-yellow-500 ml-16 mt-2 xs:ml-[105px] smCustom:ml-[135px] lg:ml-32 lg:gap-1 xl:ml-44">
           <FaStar className="size-3 md:size-4"/>
           <FaStar className="size-3 md:size-4"/>
           <FaStar className="size-3 md:size-4"/>
           <FaStar className="size-3 md:size-4"/>
           <p className=" text-black text-xs ml-1 md:text-sm">4.0/</p>
           <p className=" text-gray-400 text-xs md:text-sm">5</p>
           </div>
           <div className="hidden lg:block">
           <div className="flex">
           <div className="flex text-yellow-500 ml-[115px] mt-2 gap-1 xl:ml-40">
           <FaStar className="size-4"/>
           <FaStar className="size-4"/>
           <FaStar className="size-4"/>
           <FaStar className="size-4"/>
           <FaStarHalf className=""/>
           <p className=" text-black text-xs ml-1 md:text-sm">4.5/</p>
           <p className=" text-gray-400 text-xs md:text-sm">5</p>
           </div>
           <div className="flex text-yellow-500 ml-[115px] mt-2 gap-1 xl:ml-40">
           <FaStar className="size-4"/>
           <FaStar className="size-4"/>
           <FaStar className="size-4"/>
           <FaStar className="size-4"/>
           <FaStar className="size-4"/>
           <p className=" text-black text-xs ml-1 md:text-sm">5.0/</p>
           <p className=" text-gray-400 text-xs md:text-sm">5</p>
           </div>
           </div>
           </div>
           </div>
           <div className="flex font-bold lg:text-lg">
           <p className="ml-3 xs:ml-4 smCustom:ml-5 sm:ml-32 md:ml-40 lg:ml-11 xl:ml-28">$212</p>
            <s className="text-gray-400 ml-1">$242</s>
            <button className="border-red-200 rounded-full w-12 h-5 text-xs bg-red-100 text-red-800 font-bold
            mt-1 ml-2">-20%</button>
            <p className="ml-3 xs:ml-12 smCustom:ml-20 md:ml-24 xl:ml-36"> $145 </p>
            <p className="hidden lg:block ml-[195px] xl:ml-[250px]">$180</p>
            <p className="hidden lg:block ml-[215px] xl:ml-64">$120</p>
            <s className="hidden lg:block text-gray-400">$150</s>
            <button className="hidden lg:block border-red-200 rounded-full w-12 h-5 text-xs bg-red-100 text-red-800 font-bold
            mt-1 ml-2">-30%</button>
           </div>

           </div>
        </>
    )
}