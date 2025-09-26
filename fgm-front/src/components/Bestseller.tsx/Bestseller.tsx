"use client"

import { IProduct } from "@/interface/ICategory";
import RenderBestSeller from "./RenderBestSeller";
import Link from "next/link";
import { useState, useEffect } from "react";

interface IProps {
    products: IProduct[];
}

export const BestSeller: React.FC<IProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Responsive: productsPerView como estado
    const [productsPerView, setProductsPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            const newPerView = window.innerWidth < 640 ? 1 : 4;
            setProductsPerView(newPerView);
            // Ajustar el índice si queda fuera de rango
            setCurrentIndex((prev) => {
                const maxIndex = Math.max(0, Math.ceil(products.length / newPerView) - 1);
                return prev > maxIndex ? maxIndex : prev;
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [products.length]);

    // Calcular cuántos grupos de productos podemos mostrar
    const totalGroups = Math.ceil(products.length / productsPerView);

    const nextSlide = () => {
        setCurrentIndex(prev => {
            const nextIndex = prev + 1;
            // Si llegamos al final, volver al inicio
            if (nextIndex >= totalGroups) {
                return 0;
            }
            return nextIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex(prev => {
            const prevIndex = prev - 1;
            // Si llegamos antes del inicio, ir al final
            if (prevIndex < 0) {
                return totalGroups - 1;
            }
            return prevIndex;
        });
    };

    // Obtener los productos para el slide actual
    const getCurrentProducts = () => {
        const startIndex = currentIndex * productsPerView;
        const endIndex = startIndex + productsPerView;
        return products.slice(startIndex, endIndex);
    };

    const currentProducts = getCurrentProducts();

    return (
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Productos Destacados
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Descubre nuestros productos más populares
                </p>
            </div>

            <div className="relative w-full flex items-center justify-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
                    aria-label="Producto anterior"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="overflow-visible px-2 sm:px-12 lg:px-20 w-full">
                    <div className="flex flex-row transition-transform duration-500 ease-in-out gap-4 items-stretch justify-center">
                        {currentProducts.map((product: IProduct) => (
                            <Link
                                key={product.id}
                                href={`/productos/${product.id}`}
                                className="flex-shrink-0 w-full sm:w-1/4 min-w-0"
                            >
                                <RenderBestSeller products={product} />
                            </Link>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
                    aria-label="Siguiente producto"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BestSeller;