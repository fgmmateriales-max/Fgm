"use client";
import { IProduct } from "@/interface/ICategory";
import ProductImageCarousel from "./ProductImageCarousel";

interface ProductDetailClientProps {
    producto: IProduct;
    isBestseller: boolean;
    whatsappUrl: string;
}

export default function ProductDetailClient({ producto, isBestseller, whatsappUrl }: ProductDetailClientProps) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col p-4 sm:p-8 lg:p-12 gap-8 w-full max-w-4xl min-h-[400px] mx-auto">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center w-full">{producto.name}</h1>
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                    <div className="relative flex-shrink-0 flex flex-col items-center justify-center w-full lg:w-2/3">
                        <ProductImageCarousel images={producto.images} alt={`Imagen de ${producto.name} - ${producto.material}, dimensiones ${producto.dimension}`} />
                        {isBestseller && (
                            <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
                                Bestseller
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col justify-between flex-grow w-full lg:w-1/3 mt-6 lg:mt-0">
                        <p className="text-gray-700 text-base sm:text-lg mb-4 text-left whitespace-pre-line leading-relaxed">{producto.description}</p>
                        <div className="flex flex-col text-sm sm:text-base text-gray-500 mb-4">
                            {producto.material && <span>Material: {producto.material}</span>}
                            {producto.dimension && <span>Dimensiones: {producto.dimension}</span>}
                        </div>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 text-base py-3 border border-green-600 rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 mt-auto font-semibold"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.63 1.457 5.188L2 22l4.926-1.43A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.64 0-3.232-.498-4.59-1.44l-.327-.217-2.924.849.834-2.85-.213-.334C4.497 15.232 4 13.64 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.07-5.634c-.225-.113-1.33-.657-1.535-.732-.205-.075-.354-.112-.504.112-.15.225-.577.732-.707.882-.13.15-.262.169-.487.056-.225-.112-.949-.349-1.808-1.112-.669-.596-1.122-1.332-1.254-1.557-.131-.225-.014-.347.099-.459.101-.1.225-.262.338-.393.113-.131.15-.225.225-.375.075-.15.037-.281-.018-.393-.056-.112-.504-1.217-.691-1.668-.182-.438-.367-.378-.504-.385-.131-.007-.281-.009-.432-.009-.15 0-.393.056-.6.262-.206.206-.79.773-.79 1.885 0 1.112.809 2.186.922 2.338.112.15 1.595 2.438 3.872 3.32.542.187.964.299 1.294.383.544.138 1.04.118 1.432.072.437-.052 1.33-.544 1.518-1.07.188-.525.188-.975.131-1.07-.056-.094-.206-.15-.431-.262z" /></svg>
                            Consultar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
