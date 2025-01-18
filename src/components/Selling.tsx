import Image from 'next/image'
import Link from 'next/link'

export default function Selling (){
    return(
        <>
        <main>
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
        </main>
        </>
    )
}