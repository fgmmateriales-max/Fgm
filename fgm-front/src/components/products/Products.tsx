"use client"



import { ICategory } from "@/interface/ICategory";
import RenderProducts from "./RenderProducts";
import React from "react";

interface Props {
  categorias: ICategory[];
}

export const Products: React.FC<Props> = ({ categorias }) => {


  return (
    <div className="w-full h-full bg-[rgba(246,245,243,0.8)] rounded-xl mt-5 px-2 py-6 sm:px-6 sm:py-10 lg:px-12 lg:py-14 mx-auto">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-center mb-6 lg:mb-9">
        Renová tus Espacios al Mejor Precio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full justify-items-center">
        {categorias.map((categoria, idx) => {
          if (idx === 6) {
            return (
              <div key={categoria.id} className="col-span-full flex justify-center">
                <RenderProducts categorias={categoria} />
              </div>
            );
          }
          return <RenderProducts categorias={categoria} key={categoria.id} />;
        })}
      </div>
    </div>
  );


}




export default Products;