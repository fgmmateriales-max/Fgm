"use client";
import { useState } from "react";
import Image from "next/image";


interface ProductImageCarouselProps {
    images: string[];
    alt: string;
    categories?: { name: string }[];
}


export default function ProductImageCarousel({ images, alt }: ProductImageCarouselProps) {

    const [current, setCurrent] = useState(0);
    const imgs = images && images.length > 0 ? images : ["/assets/logo.png"];

    const prev = () => setCurrent((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    const next = () => setCurrent((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));

    // Usar object-contain si hay más de una imagen, si no object-cover
    const isContain = imgs.length > 1;

    return (
        <div className="relative w-full flex items-center justify-center">
            {imgs.length > 1 && (
                <button
                    onClick={prev}
                    className="absolute left-2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                    aria-label="Anterior"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
            )}
            <Image
                src={imgs[current]}
                alt={alt}
                width={600}
                height={600}
                className={`${isContain ? "object-contain bg-white" : "object-cover"} rounded-xl shadow-md w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]`}
            />
            {imgs.length > 1 && (
                <button
                    onClick={next}
                    className="absolute right-2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                    aria-label="Siguiente"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            )}
        </div>
    );
}
