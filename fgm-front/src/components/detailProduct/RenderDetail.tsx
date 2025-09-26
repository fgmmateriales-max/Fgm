"use client"
import { IProduct } from "@/interface/ICategory";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

interface IProps {
  products: IProduct;
}

export const RenderDetail: React.FC<IProps> = ({ products }) => {
  const { name, images, description, box, dimension, categories } = products;
  const whatsappMessage = `Hola, me gustaría recibir más información sobre el producto "${name}". Me ha interesado y quisiera conocer detalles técnicos, disponibilidad y precio. Muchas gracias.`;
  const whatsappUrl = `https://wa.me/5493515081452?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col w-full max-w-sm transition duration-300 hover:shadow-md">
      <Image
        src={images?.[0]}
        alt={name}
        width={300}
        height={144}
        className={`w-full ${categories?.some((cat: { name: string }) => cat.name === "Sofá y Colchones" || cat.name === "Grifería" || cat.name === "Baños y Sanitarios") ? "object-contain max-h-32 mx-auto" : "h-36 object-cover"} rounded-lg mb-3`}
      />
      <h2 className="text-lg font-semibold text-gray-900 mb-1 truncate">{name}</h2>
      <p className="text-sm text-gray-600 mb-2 line-clamp-3">{description}</p>
      <div className="text-xs text-gray-500 mb-4">
        {box && box.trim() !== "" && <p>Caja: {box}</p>}
        {dimension && dimension.trim() !== "" && <p>Dimensiones: {dimension}</p>}
      </div>
      <div className="flex gap-2 mt-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2"
        >
          <button className="w-full flex items-center justify-center gap-2 text-sm py-2 border border-green-600 rounded-md text-white bg-green-600 hover:bg-green-700 transition">
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp
          </button>
        </a>
        <Link href={`/productos/${products.id}`} className="w-1/2">
          <button className="w-full text-sm py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-50 transition">
            Ver detalle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RenderDetail;
