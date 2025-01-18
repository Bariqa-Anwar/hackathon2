"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Selling from "../components/Selling";
import Container from "@/components/Container";
import Feedback from "./Feedback";
import { client } from "@/sanity/lib/client";

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  discountPercent?: number;
  price: number;
  imageURL: string;
}

export default function Arrivals() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product" && new == true] | order(name asc){
          _id,
          name,
          discountPercent,
          price,
          "imageURL": image.asset->url
        }
      `;
      const data: Product[] = await client.fetch(query);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-white font-sans overflow-x-hidden">
        <div>
          {/* Arrival section */}
          <div className="font-extrabold text-center text-3xl lg:text-4xl lg:mt-8 xl:text-5xl">
            <h1 className="mt-8">NEW ARRIVALS</h1>
          </div>

          {/* Product Images */}
          <div className="flex justify-around gap-2 ml-4 mt-7 sm:ml-24 md:ml-1 md:mx-2 xl:gap-0 xl:mx-11">
            {products.map((product) => (
              <Link href="/Detail" key={product._id}>
                <Image
                  className="w-44 h-40 border rounded-xl lg:w-52 lg:h-48 xl:h-64 xl:w-60"
                  src={product.imageURL}
                  alt={product.name}
                  height={700}
                  width={700}
                />
              </Link>
            ))}
          </div>

          {/* Product Titles */}
          <div className="text-sm font-bold flex gap-4 md:justify-around lg:text-lg xl:mx-9">
            {products.map((product) => (
              <p key={product._id} className="mt-3">
                {product.name}
              </p>
            ))}
          </div>
          {/* Product Ratings */}
          {products.map((product, index) => (
            <div
              key={product._id}
              className={`text-yellow-400 flex gap-1 mt-3 ${
                index % 2 === 0 ? "ml-4" : "ml-[12.4rem]"
              }`}
            >
              <p>★</p>
              <p>★</p>
              <p>★</p>
              {product.discountPercent && product.discountPercent >= 30 && <p>★</p>}
              <Image
                className="w-3 h-3 mt-2"
                src="/images/halfRating.png"
                alt="rating"
                height={200}
                width={200}
              />
              <p className="text-black text-sm mt-1">
                {product.discountPercent ? product.discountPercent.toFixed(1) : 0}/
              </p>
              <p className="text-gray-400 text-sm mt-1">5</p>
            </div>
          ))}

          {/* Product Prices */}
          <div className="flex font-bold text-lg">
            {products.map((product) => (
              <div key={product._id} className="ml-4">
                <p>${product.price}</p>
                {product.discountPercent ? (
                  <div>
                    <s className="text-gray-400">
                      $
                      {(
                        product.price /
                        (1 - (product.discountPercent || 0) / 100)
                      ).toFixed(2)}
                    </s>
                    <button className="border-red-200 rounded-full ml-2 w-10 h-5 text-xs bg-red-200 text-red-700 font-extrabold">
                      -{product.discountPercent}%
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="md:mt-6">
            <Link href="/category">
              <button className="border rounded-full bg-white text-black font-semibold mt-5 w-72 h-9 ml-10 sm:ml-[10.9rem] md:w-44 md:h-11 md:text-sm md:ml-[19rem] lg:ml-[420px] xl:ml-[590px] hover:bg-black hover:text-white">
                View All
              </button>
            </Link>
            <hr className="mt-10 w-[21rem] h-0.5 mx-auto sm:w-[28rem] sm:h-0.5 md:w-[690px] md:h-0.5 md:mx-auto lg:w-[58rem] xl:w-[1250px]"></hr>
          </div>
        </div>
      </div>

      {/* Selling Section Component */}
      <Selling />

      {/* Dress Container */}
      <Container />

      {/* Feedback Container */}
      <Feedback />
    </>
  );
}
