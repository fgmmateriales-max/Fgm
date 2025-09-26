import React from "react";
import Image from "next/image";
import { IProduct } from "@/interface/ICategory";
import { FaWhatsapp } from "react-icons/fa";

interface IProducts {
    products: IProduct
}

export const RenderBestSeller: React.FC<IProducts> = ({ products }) => {
    const { name, images, description, material } = products;

    const handleWhatsAppClick = () => {
        const message = `Hola, me gustaría recibir más información sobre el producto "${name}". Me ha interesado y quisiera conocer detalles técnicos, disponibilidad y precio. Muchas gracias.`;
        const whatsappUrl = `https://wa.me/5493515081452?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-200 h-full flex flex-col">
            <div className="relative overflow-hidden" style={{ height: '220px' }}>
                <Image
                    src={images?.[0]}
                    alt={name}
                    width={350}
                    height={220}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/logo.png';
                    }}
                />
                {/* Badge de bestseller */}
                <div className="absolute top-2 right-2">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        Bestseller
                    </span>
                </div>
            </div>

            <div className="p-3 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {name}
                </h3>

                {description && (
                    <p className="text-gray-600 text-xs line-clamp-2 mb-3 flex-grow leading-relaxed">
                        {description}
                    </p>
                )}

                <div className="flex flex-col text-xs text-gray-500 mb-3 space-y-1">
                    <span className="truncate">{material}</span>
                </div>

                <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center gap-2 text-xs py-2 border border-green-600 rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 mt-auto"
                >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp
                </button>
            </div>
        </div>
    );
};

export default RenderBestSeller;