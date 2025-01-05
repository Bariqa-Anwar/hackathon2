import Link from "next/link";
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
                <h1 className="mt-8">NEW ARRIVALS</h1>
            </div>
            {/* images */}
        <div className="flex justify-around gap-2 ml-4 mt-7 sm:ml-24 md:ml-1 md:mx-2">
            <Link href="/Detail">
                <Image className="w-44 h-40 border rounded-xl lg:w-52 lg:h-48 xl:h-72 xl:w-64"
                src="/images/arrival1.png"
                alt="shirt" height={700} width={700}/>
            </Link>
            <Link href="/Detail">
                <Image className="w-44 h-40 border rounded-xl mr-2 md:mr-0 lg:w-52 lg:h-48 xl:h-72 xl:w-64"
                src="/images/arrival2.png"
                alt="jeans" height={700} width={700}/>
            </Link>
            <Link href="/Detail">
                <Image className="hidden md:block border rounded-xl h-40 w-44 lg:w-52 lg:h-48 xl:h-72 xl:w-64"
                src="/images/arrival3.png"
                alt="shirt" height={700} width={700}/>
            </Link>
            <Link href="/Detail">
                <Image className="hidden md:block border rounded-xl h-40 w-44 lg:w-52 lg:h-48 xl:h-72 xl:w-64"
                src="/images/arrival4.png"
                alt="shirt" height={700} width={700}/>
            </Link>
        </div>
            {/* title */}
            <div className="text-sm font-bold flex gap-4 md:justify-around lg:text-lg">
                <p className=" ml-4 mt-3 sm:ml-28 md:-ml-3 xl:-ml-8">T-Shirt with Tape Details</p>
                <p className="mt-3 ml-1 sm:ml-16 md:-ml-10 xl:-ml-20">Skinny Fit Jeans </p>
                <p className="hidden md:block mt-3 ml-6">Checkered Shirt</p>
                <p className="hidden md:block mt-3">Sleeve Striped T-Shirt</p>
            </div>
            {/* for image 1 */}
            <div className="text-yellow-400 flex ml-4 gap-1 sm:ml-28 md:ml-3 lg:ml-8 xl:ml-14">
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <Image className="w-3 h-3 mt-2"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}/>
                <p className="text-black text-sm mt-1">4.5/</p>
                <p className="text-gray-400 text-sm mt-1">5</p>
            </div>
            {/* for image 2 */}
            <div className="text-yellow-400 flex gap-1 ml-[12.4rem] -mt-6 sm:ml-[351px] md:ml-[13.3rem] lg:ml-[18.7rem] xl:ml-[390px]">
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <Image className="w-3 h-3 mt-2"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}/>  
                <p className="text-black text-sm mt-1">3.5/</p>
                <p className="text-gray-400 text-sm mt-1"> 5 </p>
            </div>
            {/* for image 3 */}
            <div className="hidden md:block">
            <div className=" text-yellow-400 flex ml-[400px] -mt-6 md:ml-[26.2rem] lg:ml-[562px] xl:ml-[745px]">
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <Image className="w-3 h-3 mt-2"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}/>  
                <p className="text-black text-sm mt-1">4.5/</p>
                <p className="text-gray-400 text-sm mt-1 ml-1">5</p>
            </div>
            </div>
            {/* for image 4 */}
            <div className="hidden md:block">
                <div className=" text-yellow-400 flex -mt-6 ml-[590px] md:ml-[37.2rem] lg:ml-[795px] xl:ml-[1075px]">
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <Image className="w-3 h-3 mt-2"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}/>  
                <p className="text-black text-sm mt-1">4.5/</p>
                <p className="text-gray-400 text-sm mt-1 ml-1"> 5 </p>
            </div>
            </div>
            <div className="flex font-bold text-lg">
                <p className="ml-4 sm:ml-28 md:ml-4 lg:ml-8 xl:ml-14">$120</p>
                <p className="ml-[8.8rem] sm:ml-[12.5rem] md:ml-[9.9rem] lg:ml-56 xl:ml-72">$240</p>
                <s className="text-gray-400 ml-1">$260</s>
                <button className="border-red-200 rounded-full ml- w-10 h-5 text-xs bg-red-200 text-red-700 ml-2 mt-1 
                font-extrabold">-20%</button>
                <p className="hidden md:block ml-14 md:ml-16 lg:ml-32 xl:ml-56">$180</p>
                <p className="hidden md:block ml-36 lg:ml-48 xl:ml-72">$130</p>
                <s className="hidden md:block text-gray-400">$160</s>
                <button className="hidden md:block border-red-200 rounded-full w-10 h-5 text-xs bg-red-200 text-red-700 
                font-extrabold mt-1 ml-2">-30%</button>
            </div>
            <div className="md:mt-6">
                <Link href="/category">
                <button className= "border rounded-full bg-white text-black font-semibold mt-5 w-72 h-9 ml-10 sm:ml-[10.9rem] md:w-44 md:h-11 md:text-sm md:ml-[19rem] lg:ml-[420px] xl:ml-[590px] hover:bg-black hover:text-white">
                View All</button></Link>
                <hr className="mt-10 w-[21rem] h-0.5 mx-auto sm:w-[28rem] sm:h-0.5 md:w-[690px] md:h-0.5 md:mx-auto lg:w-[58rem]
                xl:w-[1250px]"></hr>
            </div>
            {/* Selling section */}
            <div className="mt-12">
                <h1 className="text-center font-extrabold text-3xl lg:text-4xl xl:text-5xl">TOP SELLING</h1>
            </div>
            <div className="flex mt-8 gap-2 justify-around ml-4 sm:ml-24 md:ml-2 md:mx-2">
            <Link href="/Detail">
               <Image className="w-44 h-40 border rounded-xl sm:w-48 sm:h-44 md:w-44 md:h-44 
               lg:w-52 lg:h-48 xl:h-72 xl:w-64"
               src="/images/sell1.png" 
               alt="shirt" height={1000} width={1000}/>
            </Link>
            <Link href="/Detail">
               <Image className="w-44 h-40 border rounded-xl sm:w-48 sm:h-44 md:w-44 md:h-44
               lg:w-52 lg:h-48 xl:h-72 xl:w-64"
               src="/images/sell2.png" 
               alt="shirt" height={1000} width={1000}/>
            </Link>
            <Link href="/Detail">
               <Image className="hidden md:block w-44 h-44 border rounded-xl lg:w-52 lg:h-48 xl:h-72 xl:w-64"
               src="/images/sell3.png" 
               alt="shirt" height={1000} width={1000}/>
            </Link>
            <Link href="/Detail">
               <Image className="hidden md:block w-44 h-44 border rounded-xl lg:w-52 lg:h-48 xl:h-72 xl:w-64"
               src="/images/sell4.png" 
               alt="shirt" height={1000} width={1000}/>
            </Link>
            </div>
            {/* images title */}
            <div className="text-sm font-bold flex gap-3 mt-4 md:gap-11 lg:justify-around lg:text-base">
                <p className="ml-4 sm:ml-28 md:ml-4 xl:ml-0">Vertical Striped Shirt</p>
                <p className="ml-9 sm:ml-24 md:ml-1 lg:ml-5 xl:ml-0"> Courage Graphic T-Shirt</p>
                <p className="hidden md:block xl:-ml-4">Loose Fit Bermuda Shorts</p>
                <p className="hidden md:block md:mr-6 lg:mr-12">Faded Skinny Jeans</p>
            </div>
            {/* image 1 ratings */}
            <div className="text-yellow-400 flex ml-4 sm:ml-28 md:ml-4 lg:ml-8 xl:ml-16">
                <p className="md:">★</p>                
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p className=" text-black ml-3 text-sm mt-1">5.0/</p>
                <p className="text-gray-400 text-sm mt-1">5</p>
                {/* image 2 ratings */}
                <p className="ml-[4.5rem] sm:ml-[8.3rem] md:ml-[4.6rem] lg:ml-36 xl:ml-[13.5rem]">★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p className=" text-black text-sm ml-3 mt-1">4.0/</p>
                <p className=" text-gray-400 text-sm mt-1">5</p>
                {/* image 3 ratings */}
                <p className="hidden md:block ml-28 md:ml-[6.5rem] lg:ml-40 xl:ml-60">★</p>
                <p className="hidden md:block">★</p>
                <p className="hidden md:block">★</p>
                <p className="hidden md:block text-black text-sm ml-2 mt-1">3.0/</p>
                <p className="hidden md:block text-gray-400 text-sm mt-1">5</p>
                {/* image 4 ratings */}
                <p className="hidden md:block ml-36 md:ml-[8.5rem] lg:ml-48 xl:ml-[285px]">★</p>
                <p className="hidden md:block">★</p>
                <p className="hidden md:block">★</p>
                <p className="hidden md:block">★</p>
                <Image className="w-3 h-3 mt-2 hidden md:block"
                src="/images/halfRating.png"
                alt="rating"
                height={200} width={200}/>  
                <p className="hidden md:block text-black text-sm mt-1 ml-2">4.5/</p>
                <p className="hidden md:block text-gray-400 text-sm mt-1"> 5 </p>
            </div>
            <div className="flex font-bold text-lg">
                {/* image 1 price */}
                <p className="ml-4 sm:ml-28 md:ml-4 lg:ml-7 xl:ml-16">$212</p>
                <s className="text-gray-400 ml-1">$235</s>
                <button className="border-red-200 rounded-full w-12 h-5 text-xs bg-red-100 text-red-700 font-normal
                mt-1 ml-2">-20%</button>
                {/* image 2 price */}
                <p className="ml-10 sm:ml-24 md:ml-11 lg:ml-28 xl:ml-[11.5rem]">$145</p>
                {/* image 3 price */}
                <p className="hidden md:block ml-40 lg:ml-[13.7rem] xl:ml-[18.5rem]">
                $80</p>
                {/* image 4 price */}
                <p className="hidden md:block ml-48 md:ml-[11.5rem] lg:ml-60 xl:ml-[335px]">$210</p>
            </div>
            <div>
                <Link href="/category">
            <button className= "border rounded-full bg-white text-black font-semibold mx-4 mt-6 w-72 h-9 ml-10 sm:ml-[10.9rem] md:w-44 md:h-11 md:text-sm md:ml-[19rem] lg:ml-[430px] xl:ml-[590px] hover:bg-black hover:text-white">
            View All</button></Link>
            </div>
        </div>

        {/* container */}
        <div className="overflow-x-hidden container flex-col bg-gray-100 rounded-3xl h-[800px] w-72 text-center mx-auto mt-12
        sm:w-96 md:w-[600px] md:h-[450px] md:flex-row-reverse lg:w-[850px] lg:h-[500px] xl:w-[1200px] xl:h-[630px] 
        overflow-y-hidden">
                <h1 className="font-extrabold text-3xl font-sans mx-2 pt-9 sm:mx-14 lg:text-4xl xl:text-5xl">
                BROWSE BY DRESS STYLE</h1>
        <div className="relative mt-6 xl:mt-9"> 
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 md:ml-24 xl:ml-40 xl:text-xl">Casual</h1>
                <Image className="h-36 w-64 mx-auto rounded-xl md:ml-8 md:w-52 md:h-36 lg:h-44 lg:w-60 lg:ml-16 xl:h-56 xl:w-80 xl:ml-36"
                src="/images/casual.png"
                alt="dress"
                height={700} 
                width={700}/>
        </div>
        <div className="relative mt-4">
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 md:ml-72 lg:ml-96 xl:text-xl xl:ml-[510px]">Formal</h1>
                <Image className="h-36 w-64 mx-auto rounded-xl md:ml-64 md:w-80 md:h-36 md:-mt-40 lg:h-44 lg:w-[450px] lg:ml-80 lg:-mt-48
                xl:h-56 xl:w-[550px] xl:ml-[490px] xl:-mt-60"
                src="/images/formal.png"
                alt="dress"
                height={900} 
                width={1000}/>
        </div>
        <div className="relative mt-4">
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 lg:ml-24 xl:ml-40 xl:text-xl">Party</h1>
                <Image className="h-36 w-64 mx-auto rounded-xl md:mr-64 md:w-80 lg:ml-16 lg:w-[450px] lg:h-44 xl:ml-36 xl:h-56 xl:w-[550px]"
                src="/images/party.png"
                alt="dress"
                height={700} 
                width={700}/>
        </div>
        <div className="relative mt-44">
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 md:ml-96 lg:ml-[560px] xl:text-xl xl:ml-[740px]">Gym</h1>
                <Image className="h-40 w-64 mx-auto -mt-40 rounded-xl md:ml-[360px] md:w-52 md:h-36 md:-mt-[320px] lg:ml-[530px] lg:h-44 lg:w-60 lg:-mt-[350px] xl:h-56 xl:w-80 xl:ml-[720px] xl:-mt-[395px]"
                src="/images/gym.png"
                alt="dress"
                height={700} 
                width={700}/>
        </div>
        </div>
        {/* feedback container */}
        <div className="mt-9 flex overflow-x-hidden mx-8">
                <h1 className="font-sans font-extrabold text-2xl mx-5 sm:ml-36 md:ml-20 md:text-3xl lg:text-4xl lg:ml-24 xl:text-5xl">
                OUR HAPPY CUSTOMERS</h1>
                <ArrowLeft className="mt-10 mr-2 sm:mr-4 md:ml-28 lg:ml-64 xl:ml-[490px]"/>
                <ArrowRight className="mt-10 mr-4 sm:mr-16 "/>
        </div>
            {/* feedback 1 */}
        <div className="flex">
        <div className="container border border-gray-200 rounded-2xl mt-5 h-48 w-72 mx-auto"> 
        <div className=" text-yellow-400 flex ml-8">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
        </div>
        <div className="flex">
            <h1 className="text-sm font-bold ml-8 mt-2">Sarah M.</h1>
            <FaCheckCircle className="text-green-600 mt-2 ml-1" />
        </div>
            <p className="text-gray-600 text-sm mx-7 mt-1 font-sans">
                {`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to 
                elegant dresses, every piece I've bought has exceeded my expectations."`}
            </p>
        </div>
            {/* feedback 2 */}
        <div className="hidden sm:block container border border-gray-200 rounded-2xl mt-5 h-48 w-72 mx-auto"> 
        <div className=" text-yellow-400 flex ml-8">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
        </div>
        <div className="flex">
            <h1 className="text-sm font-bold ml-8 mt-2"> Alex K.</h1>
            <FaCheckCircle className="text-green-600 mt-2 ml-1" />
        </div>
            <p className="text-gray-600 text-sm mx-7 mt-1 font-sans">
                
                {`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of
                options they offer is truly remarkable, catering to a veriety of tastes and occasions."`}</p>
            </div>
            {/* feedback 2 */}
            <div className="hidden lg:block container border border-gray-200 rounded-2xl mt-5 h-48 w-72 mx-auto"> 
                <div className=" text-yellow-400 flex ml-8">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
                </div>
            <div className="flex">
            <h1 className="text-sm font-bold ml-8 mt-2">James L.</h1>
            <FaCheckCircle className="text-green-600 mt-2 ml-1" />
            </div>
            <p className="text-gray-600 text-sm mx-7 mt-1 font-sans xs:mx-6">
                {`"As someone who's always on the lookout for unique fashion pieces. I'm thrilled to have stumbled upon Shop.co.
                The selection of clothes is not only diverse but also on-point with the latest trends." `}
            </p>
            </div>
            </div>
        </>
    )
}