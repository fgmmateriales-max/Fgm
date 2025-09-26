"use client";
import React, { useState } from "react";
import Image from "next/image";

export const Work: React.FC = () => {
  const images = [
    "/assets/foto1.png",
    "/assets/foto2.png",
    "/assets/foto3.png",
    "/assets/foto4.png",
    "/assets/foto6.png",
    "/assets/foto7.png",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  const openModal = (src: string) => {
    setModalImg(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <section className="px-3 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-light tracking-tight  mb-2">
          Transformamos ideas en resultados
        </h1>
        <h3 className="text-lg text-gray-600">Nuestros proyectos y clientes</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => openModal(src)}
          >
            <Image
              src={src}
              alt={`Trabajo ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
              aria-label="Cerrar"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <Image
              src={modalImg ?? ""}
              alt="Imagen ampliada"
              width={800}
              height={600}
              className="rounded-2xl max-w-[90vw] max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Work;