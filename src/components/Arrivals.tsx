import Image from "next/image";
import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { FaCheckCircle } from "react-icons/fa";



export default function Arrivals (){
    return(
        <>
        <div className="bg-white font-sans overflow-x-hidden"> 
            {/* Arrival section */}
            <div className="font-extrabold text-center text-3xl lg:text-4xl lg:mt-8 xl:text-5xl">
                <h1 className="mt-8">
                    NEW ARRIVALS
                </h1>
            </div>
            {/* images */}
            <div className="flex justify-around gap-3 mt-7 md:gap-0">
                <Image className="w-44 h-40 border rounded-xl lg:w-52 lg:h-48 xl:h-72 xl:w-64"
                src="/images/arrival1.png"
                alt="shirt" height={700} width={700}
                />
                <Image className="w-44 h-40 border rounded-xl mr-2 md:mr-0 lg:w-52 lg:h-48 xl:h-72 xl:w-64"
                src="/images/arrival2.png"
                alt="jeans" height={700} width={700}
                />
                <Image className="hidden md:block border rounded-xl h-40 w-44 lg:w-52 lg:h-48 xl:h-72 xl:w-64"
                src="/images/arrival3.png"
                alt="shirt" height={700} width={700}
                />
                <Image className="hidden md:block border rounded-xl h-40 w-44 lg:w-52 lg:h-48 xl:h-72 xl:w-64"
                src="/images/arrival4.png"
                alt="shirt" height={700} width={700}
                />
            </div>
            {/* title */}
            <div className="text-sm font-bold flex gap-4 md:justify-around lg:text-lg">
                <p className=" ml-2 mt-3 xs:ml-4 smCustom:ml-5 sm:ml-20 md:-ml-5 xl:-ml-8">
                T-Shirt with Tape Details
                </p>
                <p className="mt-3 xs:ml-3 smCustom:ml-10 sm:ml-40 md:-ml-14 xl:-ml-20">
                Skinny Fit Jeans 
                </p>
                <p className="hidden md:block mt-3 ml-6">
                Checkered Shirt
                </p>
                <p className="hidden md:block   mt-3">
                Sleeve Striped T-Shirt
                </p>
            </div>
            {/* for image 1 */}
            <div className="text-yellow-400 flex ml-3 gap-1 xs:ml-4 smCustom:ml-5 sm:ml-20 md:ml-3 lg:ml-8 xl:ml-14">
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <Image className="w-3 h-3 mt-2"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}
                />
                <p className="text-black text-sm mt-1">4.5/</p>
                <p className="text-gray-400 text-sm mt-1">5</p>
            </div>
            {/* for image 2 */}
            <div className="text-yellow-400 flex gap-1 ml-48 -mt-6 xs:ml-52 smCustom:ml-60 sm:ml-[420px] md:ml-52 lg:ml-72 xl:ml-[390px]">
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <Image className="w-3 h-3 mt-2"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}
                />  
                <p className="text-black text-sm mt-1">3.5/</p>
                <p className="text-gray-400 text-sm mt-1"> 5 </p>
            </div>
            {/* for image 3 */}
            <div className="hidden md:block">
            <div className=" text-yellow-400 flex ml-[400px] -mt-6 lg:ml-[550px] xl:ml-[740px]">
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <Image className="w-3 h-3 mt-2"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}
                />  
                <p className="text-black text-sm mt-1">4.5/</p>
                <p className="text-gray-400 text-sm mt-1 ml-1"> 5 </p>
            </div>
            </div>
            {/* for image 4 */}
            <div className="hidden md:block">
                <div className=" text-yellow-400 flex -mt-6 ml-[590px] lg:ml-[810px] xl:ml-[1070px]">
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <Image className="w-3 h-3 mt-2"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}
                />  
                <p className="text-black text-sm mt-1">4.5/</p>
                <p className="text-gray-400 text-sm mt-1 ml-1"> 5 </p>
            </div>
            </div>
            <div className="flex font-bold text-lg">
                <p className="ml-3 xs:ml-4 smCustom:ml-5 sm:ml-20 md:ml-3 lg:ml-8 xl:ml-14">
                $120
                </p>
                <p className="ml-32 xs:ml-36 smCustom:ml-44 sm:ml-72 md:ml-36 lg:ml-52 xl:ml-72">
                $240
                </p>
                <s className="text-gray-400 ml-1 xs:ml-3">
                $260
                </s>
                <button className="border-red-200 rounded-full w-10 h-5 text-xs bg-red-200 text-red-700 ml-2 mt-1 
                font-extrabold">
                -20%
                </button>
                <p className="hidden md:block ml-14 lg:ml-32 xl:ml-52">
                $180</p>
                <p className="hidden md:block ml-36 lg:ml-52 xl:ml-72">
                $130</p>
                <s className="hidden md:block text-gray-400">
                $160</s>
                <button className="hidden md:block border-red-200 rounded-full w-10 h-5 text-xs bg-red-200 text-red-700 
                font-extrabold mt-1 ml-2">
                -30%
                </button>
            </div>
            <div className="md:mt-6">
                <button className= "border rounded-full bg-white text-black font-semibold mx-4 mt-5 w-72 h-9 xs:mx-8 smCustom:mx-16sm:ml-48 md:w-44 md:h-11 md:text-sm md:mx-72 lg:ml-[420px] xl:ml-[590px]">
                View All
                </button>
                <hr className="mt-10 w-72 h-0.5 ml-4 xs:ml-9 smCustom:ml-16 sm:ml-36 sm:w-96 sm:h-0.5 md:w-[600px] md:h-0.5 md:mx-auto
                xl:w-[900px]">
                </hr>
            </div>
            {/* Selling section */}
            <div className="mt-12">
                <h1 className="text-center font-extrabold text-3xl lg:text-4xl xl:text-5xl">
                    TOP SELLING
                </h1>
            </div>
            <div className="flex mt-8 justify-around">
               <Image className="w-36 h-36 border rounded-xl smCustom:w-40 smCustom:h-40 sm:w-48 sm:h-44 md:w-44 md:h-44 
               lg:w-52 lg:h-48 xl:h-72 xl:w-64"
               src="/images/sell1.png" 
               alt="shirt" height={1000} width={1000}
               />
               <Image className="w-36 h-36 border rounded-xl smCustom:w-40 smCustom:h-40 sm:w-48 sm:h-44 md:w-44 md:h-44
               lg:w-52 lg:h-48 xl:h-72 xl:w-64"
               src="/images/sell2.png" 
               alt="shirt" height={1000} width={1000}
               />
               <Image className="hidden md:block w-44 h-44 border rounded-xl lg:w-52 lg:h-48 xl:h-72 xl:w-64"
               src="/images/sell3.png" 
               alt="shirt" height={1000} width={1000}
               />
               <Image className="hidden md:block w-44 h-44 border rounded-xl lg:w-52 lg:h-48 xl:h-72 xl:w-64"
               src="/images/sell4.png" 
               alt="shirt" height={1000} width={1000}
               />
            </div>
            {/* images title */}
            <div className="text-sm font-bold flex gap-3 mt-4 md:gap-11 lg:justify-around lg:text-base">
                <p className="ml-2 xs:ml-6 smCustom:ml-7 sm:ml-16 md:ml-4 xl:ml-0">
                Vertical Striped Shirt
                </p>
                <p className="ml-9 smCustom:ml-16 sm:ml-44 md:ml-0 lg:ml-5 xl:ml-0"> 
                Courage Graphic T-Shirt
                </p>
                <p className="hidden md:block xl:-ml-4">
                Loose Fit Bermuda Shorts
                </p>
                <p className="hidden md:block lg:mr-12">
                Faded Skinny Jeans
                </p>
            </div>
            {/* image 1 ratings */}
            <div className="text-yellow-400 flex ml-2 xs:ml-6 smCustom:ml-7 sm:ml-16 md:ml-4 lg:ml-8 xl:ml-16">
                <p className="md:">★</p>                
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p className=" text-black ml-3 text-sm mt-1">5.0/</p>
                <p className="text-gray-400 text-sm mt-1">5</p>
                {/* image 2 ratings */}
                <p className="ml-12 xs:ml-20 smCustom:ml-24 sm:ml-52 md:ml-16 lg:ml-36 xl:ml-56">
                ★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p className=" text-black text-sm ml-3 mt-1">4.0/</p>
                <p className=" text-gray-400 text-sm mt-1">5</p>
                {/* image 3 ratings */}
                <p className="hidden md:block ml-28 lg:ml-40 xl:ml-60">★</p>
                <p className="hidden md:block">★</p>
                <p className="hidden md:block">★</p>
                <p className="hidden md:block text-black text-sm ml-2 mt-1">3.0/</p>
                <p className="hidden md:block text-gray-400 text-sm mt-1">5</p>
                {/* image 4 ratings */}
                <p className="hidden md:block ml-36 lg:ml-48 xl:ml-[280px]">★</p>
                <p className="hidden md:block">★</p>
                <p className="hidden md:block">★</p>
                <p className="hidden md:block">★</p>
                <Image className="w-3 h-3 mt-2 hidden md:block"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}
                />  
                <p className="hidden md:block text-black text-sm mt-1 ml-2">4.5/</p>
                <p className="hidden md:block text-gray-400 text-sm mt-1"> 5 </p>
            </div>
            <div className="flex font-bold text-lg">
                {/* image 1 price */}
                <p className="ml-2 xs:ml-6 smCustom:ml-7 sm:ml-16 md:ml-3 lg:ml-7 xl:ml-16">
                $212</p>
                <s className="text-gray-400 ml-1">
                $235</s>
                <button className="border-red-200 rounded-full w-12 h-5 text-xs bg-red-100 text-red-700 font-normal
                mt-1 ml-2">
                -20%</button>
                {/* image 2 price */}
                <p className="ml-5 xs:ml-11 smCustom:ml-16 sm:ml-44 md:ml-9 lg:ml-28 xl:ml-48">
                $145</p>
                {/* image 3 price */}
                <p className="hidden md:block ml-40 lg:ml-56 xl:ml-72">
                $80</p>
                {/* image 4 price */}
                <p className="hidden md:block ml-48 lg:ml-60 xl:ml-[330px]">
                $210</p>
            </div>
            <div>
            <button className= "border rounded-full bg-white text-black font-semibold mx-4 mt-6 w-72 h-9 xs:mt-6 xs:mx-11 smCustom:mx-16 sm:mx-48 md:w-44 md:h-11 md:text-sm md:mx-72 lg:ml-[430px] xl:ml-[590px]">
            View All</button>
            </div>
        </div>

        {/* container */}
        <div className="overflow-x-hidden container flex-col bg-gray-100 rounded-3xl h-[800px] w-72 text-center mx-auto mt-12
        xs:w-80 sm:w-96 md:w-[600px] md:h-[450px] md:flex-row-reverse lg:w-[850px] lg:h-[500px] xl:w-[1200px] xl:h-[630px] overflow-y-hidden">
        <h1 className="font-extrabold text-3xl font-sans mx-2 pt-9 xs:mx-6 sm:mx-14 lg:text-4xl xl:text-5xl">
                BROWSE BY DRESS STYLE
                </h1>
            <div className="relative mt-6 xl:mt-9"> 
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 md:ml-24 xl:ml-40 xl:text-xl">
                    Casual
                </h1>
                <Image className="h-36 w-64 mx-auto rounded-xl md:ml-8 md:w-52 md:h-36 lg:h-44 lg:w-60 lg:ml-16 xl:h-56 xl:w-80 xl:ml-36"
                src="/images/casual.png"
                alt="dress"
                height={700} 
                width={700}/>
            </div>
            <div className="relative mt-4">
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 md:ml-72 lg:ml-96 xl:text-xl xl:ml-[510px]">
                    Formal
                </h1>
                <Image className="h-36 w-64 mx-auto rounded-xl md:ml-64 md:w-80 md:h-36 md:-mt-40 lg:h-44 lg:w-[450px] lg:ml-80 lg:-mt-48
                xl:h-56 xl:w-[550px] xl:ml-[490px] xl:-mt-60"
                src="/images/formal.png"
                alt="dress"
                height={900} 
                width={1000}/>
            </div>
            <div className="relative mt-4">
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 lg:ml-24 xl:ml-40 xl:text-xl">
                    Party
                </h1>
                <Image className="h-36 w-64 mx-auto rounded-xl md:mr-64 md:w-80 lg:ml-16 lg:w-[450px] lg:h-44 xl:ml-36 xl:h-56 xl:w-[550px]"
                src="/images/party.png"
                alt="dress"
                height={700} 
                width={700}/>
            </div>
            <div className="relative mt-44">
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 md:ml-96 lg:ml-[560px] xl:text-xl xl:ml-[740px]">
                    Gym
                </h1>
                <Image className="h-40 w-64 mx-auto rounded-xl md:ml-[360px] md:w-52 md:h-36 md:-mt-[320px] lg:ml-[530px] lg:h-44 lg:w-60 
                lg:-mt-[350px] xl:h-56 xl:w-80 xl:ml-[720px] xl:-mt-[395px]"
                src="/images/gym.png"
                alt="dress"
                height={700} 
                width={700}/>
            </div>
        </div>
        {/* feedback container */}
        <div className="mt-9 flex overflow-x-hidden ">
                <h1 className="font-sans font-extrabold text-2xl mx-5 xs:ml-12 smCustom:ml-20 sm:ml-36 md:ml-20 md:text-3xl lg:text-4xl
                lg:ml-24 xl:text-5xl">
                    OUR HAPPY CUSTOMERS
                </h1>
                <ArrowLeft className="mt-10 mr-2 xs:mr-2 sm:mr-4 md:ml-28 lg:ml-64 xl:ml-[490px]"/>
                <ArrowRight className="mt-10 mr-4 xs:mr-8 smCustom:mr-14 sm:mr-16 "/>
            </div>
            {/* feedback 1 */}
            <div className="flex">
            <div className="container border border-gray-200 rounded-2xl mt-5 h-48 w-72 mx-auto"> 
                <div className=" text-yellow-400 flex ml-8 xs:ml-7">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            </div>
            <div className="flex">
            <h1 className="text-sm font-bold ml-8 mt-2 xs:ml-7"> 
            Sarah M.</h1>
            <FaCheckCircle className="text-green-600 mt-2 ml-1" />
            </div>
            <p className="text-gray-600 text-sm mx-7 mt-1 font-sans xs:mx-6">
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to 
                elegant dresses, every piece I've bought has exceeded my expectations."
            </p>
            </div>
            {/* feedback 2 */}
            <div className="hidden sm:block container border border-gray-200 rounded-2xl mt-5 h-48 w-72 mx-auto"> 
                <div className=" text-yellow-400 flex ml-8 xs:ml-7">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            </div>
            <div className="flex">
            <h1 className="text-sm font-bold ml-8 mt-2 xs:ml-7"> 
            Alex K.</h1>
            <FaCheckCircle className="text-green-600 mt-2 ml-1" />
            </div>
            <p className="text-gray-600 text-sm mx-7 mt-1 font-sans xs:mx-6">
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of
                options they offer is truly remarkable, catering to a veriety of tastes and occasions."
            </p>
            </div>
            {/* feedback 2 */}
            <div className="hidden lg:block container border border-gray-200 rounded-2xl mt-5 h-48 w-72 mx-auto"> 
                <div className=" text-yellow-400 flex ml-8 xs:ml-7">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            </div>
            <div className="flex">
            <h1 className="text-sm font-bold ml-8 mt-2 xs:ml-7"> 
            James L.</h1>
            <FaCheckCircle className="text-green-600 mt-2 ml-1" />
            </div>
            <p className="text-gray-600 text-sm mx-7 mt-1 font-sans xs:mx-6">
                "As someone who's always on the lookout for unique fashion pieces. I'm thrilled to have stumbled upon Shop.co.
                The selection of clothes is not only diverse but also on-point with the latest trends."
            </p>
            </div>
            </div>
        </>
    )
}