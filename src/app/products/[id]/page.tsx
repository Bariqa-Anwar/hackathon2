"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  discountPercent?: number; // Optional field
  new: boolean;
  colors?: string[]; // Optional field
  sizes?: string[]; // Optional field
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == $id][0] {
          _id,
          name,
          price,
          description,
          "imageUrl": image.asset->url,
          category,
          discountPercent,
          new,
          colors,
          sizes
        }`;
        
        const product: Product = await client.fetch(query, { id });
        if (!product) {
          throw new Error('Product not found.');
        }
        setProduct(product);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-col ml-9 mt-9 sm:mt-14 sm:ml-40">
        {/* Product Image */}
        <div className="w-72 h-72 sm:w-80 sm::h-80">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={800}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4 sm:mt-12">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4].map((star) => (
              <FaStar key={star} className="text-yellow-500" />
            ))}
            <span className="text-gray-500">4.0/5</span>
          </div>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          
          {/* Discounted Price Section */}
          {product.discountPercent && product.discountPercent > 0 ? (
            <div className="flex items-center gap-2 mb-4">
              <s className="text-gray-500">
                ${product.price + (product.price * product.discountPercent) / 100}
              </s>
              <span className="text-red-800 bg-red-100 px-2 py-1 rounded-full text-sm">
                -{product.discountPercent}%
              </span>
            </div>
          ) : null}

          <p className="text-gray-600 text-base mb-4 sm:mr-14">{product.description}</p>

          {/* Product Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              <p className="w-full text-sm font-semibold">Colors:</p>
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="px-3 py-1 border rounded-full text-sm"
                >
                  {color}
                </span>
              ))}
            </div>
          )}

          {/* Product Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              <p className="w-full text-sm font-semibold">Sizes:</p>
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 border rounded-full text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}