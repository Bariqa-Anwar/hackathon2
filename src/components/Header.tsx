import Image from "next/image";


export default function Header () {
    return (
        <>
        <main>
            <div>
               <div className=" bg-customGray mt-3 text-left">
                 <h1 className="font-extrabold font-sans text-4xl pt-6 ml-4 mr-3">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                 </h1>
                 <p className="mt-4 ml-5 mr-4 text-xs text-gray-500 font-sans"> Browse through our diverse range of meticulously crafted garments, 
                    designed to bring out your individuality and cater to your sense of style.
                 </p>
                 <button className="border-black rounded-full bg-black text-white font-extrabold mx-4 mt-5 w-72 h-9 ">
                Shop Now</button>
                <h1 className="flex font-bold mt-5 ml-9 text-xl">200+ <hr className="border-l-2 border-gray-300 h-14 w-0 ml-20">
                </hr>
                <h1 className="ml-5">2,000+</h1>
                </h1>
                <p className="text-sm text-gray-500 font-sans ml-9 -mt-7">International Brands </p> 
                <p className="text-sm text-gray-500 font-sans ml-44 -mt-5">High-Quality Products</p>
                <h1 className="font-bold text-xl ml-32 mt-6 ">30,000+</h1>
                <p className="font-sans text-sm text-gray-500 ml-32 -mt-1">Happy Customers</p>
                <Image 
                src="/images/star.png"
                alt="star" height={100} width={100} /> 
                {/* <Image className="w-80 h-48"
                src="/images/mainpic.png" 
                alt="couple" height={700} width={700} /> */}

                </div> 
            </div>
        </main>
        </>
    )
}