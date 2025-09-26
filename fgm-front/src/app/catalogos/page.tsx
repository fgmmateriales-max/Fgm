"use client"
const pdfs = [
    {
        name: "FGM - Catalogo de Griferias",
        url: "/assets/pdfs/FGM - Catalogo Griferia.pdf",
        portada: "/assets/pdfs/portadaGriferia.png"
    },
    {
        name: "FGM - Catalogo de Paredes",
        url: "/assets/pdfs/FGM - Catalogo Paredes.pdf",
        portada: "/assets/pdfs/portadaParedes.png"
    },
    {
        name: "FGM - Catalogo de Pisos Porcelanatos",
        url: "/assets/pdfs/FGM - Catalogo Pisos Porcelanatos.pdf",
        portada: "/assets/pdfs/portadaPisos.png"
    },
    {
        name: "FGM - Catalogo de Sanitarios",
        url: "/assets/pdfs/FGM - Catalogo Sanitarios.pdf",
        portada: "/assets/pdfs/portadaSanitarios.png"
    },
    {
        name: "FGM - Catalogo de Sofa y Colchones",
        url: "/assets/pdfs/FGM - Catalogo Sofa Colchones.pdf",
        portada: "/assets/pdfs/portadaSofa.png"
    },
];


import Image from "next/image";
import { useEffect, useState } from "react";

export default function CatalogosPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">Catálogos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {pdfs.map((pdf) => (
                    <div
                        key={pdf.url}
                        className="bg-white rounded-2xl shadow-lg p-3 sm:p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition min-h-[220px] sm:min-h-[420px] lg:min-h-[480px]"
                        onClick={() => window.open(pdf.url, "_blank")}
                    >
                        <div className="w-full flex justify-center">
                            {isMobile ? (
                                <Image
                                    src={pdf.portada}
                                    alt={`Portada de ${pdf.name}`}
                                    width={220}
                                    height={160}
                                    className="mb-4 border rounded w-full max-w-[220px] h-[160px] object-cover"
                                />
                            ) : (
                                <iframe
                                    src={pdf.url}
                                    className="mb-4 border rounded w-full max-w-[380px] h-[280px] sm:max-w-[440px] sm:h-[340px] lg:max-w-[520px] lg:h-[400px]"
                                    title={pdf.name}
                                />
                            )}
                        </div>
                        <div className="font-semibold text-center text-lg sm:text-xl mt-4">{pdf.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}