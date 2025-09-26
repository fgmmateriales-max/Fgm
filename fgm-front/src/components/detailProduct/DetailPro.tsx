"use client"
import { IProduct } from "@/interface/ICategory";
import React, { useState } from "react";
import RenderDetail from "./RenderDetail";

interface IProps {
  products: IProduct[];
}

export const DetailPro: React.FC<IProps> = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="w-full px-9 py-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {visibleProducts.map((product: IProduct) => (
          <RenderDetail key={product.id} products={product} />
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailPro;
