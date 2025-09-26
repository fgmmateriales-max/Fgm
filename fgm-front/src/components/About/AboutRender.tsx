"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const AboutRender: React.FC = () => {
  const images = [
    "/assets/about1.png",
    "/assets/about2.png",
    "/assets/about3.png",
    "/assets/about4.png",
  ];

  return (
    <section className="bg-white text-gray-900 font-sans px-4 py-10 max-w-6xl mx-auto relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight">Sobre FGM Materiales y Soluciones</h2>

      <div className="flex flex-col md:flex-row md:items-center md:gap-16 mb-16 min-h-[600px]">
        <div className="relative flex-1 flex justify-center items-center min-h-[420px] md:min-h-[540px]">
          <Image
            src={images[0]}
            alt="Foto principal"
            width={256}
            height={320}
            className="absolute z-20 left-1/2 top-1/2 w-48 h-64 md:w-64 md:h-80 object-cover rounded-xl shadow-2xl border-4 border-white transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition duration-300"
          />
          <Image
            src={images[1]}
            alt="Foto secundaria 1"
            width={160}
            height={224}
            className="absolute z-10 left-0 top-6 w-32 h-40 md:w-40 md:h-56 object-cover rounded-lg shadow-xl border-4 border-white hover:scale-105 transition duration-300 rotate-[-8deg]"
          />
          <Image
            src={images[2]}
            alt="Foto secundaria 2"
            width={160}
            height={224}
            className="absolute z-10 right-0 bottom-6 w-32 h-40 md:w-40 md:h-56 object-cover rounded-lg shadow-xl border-4 border-white hover:scale-105 transition duration-300 rotate-[7deg]"
          />
          <Image
            src={images[3]}
            alt="Foto fondo"
            width={112}
            height={128}
            className="absolute z-0 left-1/4 top-1/4 w-28 h-32 md:w-36 md:h-44 object-cover rounded-lg opacity-70 blur-sm border-4 border-white"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center h-full mt-12 md:mt-0 md:ml-36">
          <div className="w-full max-w-2xl">
            <p className="text-base md:text-xl leading-relaxed mb-8 text-justify md:text-center">
              En FGM Materiales y Soluciones contamos con una sólida trayectoria como empresa
              líder en el sector de la construcción, reconocida por brindar soluciones integrales,
              eficientes y de alta calidad en cada proyecto. Nuestra experiencia y compromiso nos
              han posicionado como un aliado estratégico tanto para desarrolladores, constructoras
              como para clientes particulares.
            </p>
            <p className="text-base md:text-xl leading-relaxed mb-8 text-justify md:text-center">
              Hoy, damos un paso más en nuestra evolución: incorporamos la comercialización de materiales
              de construcción, ampliando nuestra propuesta de valor para acompañarte desde el inicio de tu obra.
              Ofrecemos una amplia gama de productos de primeras marcas, asesoramiento técnico personalizado y un
              servicio logístico ágil que asegura entregas rápidas y confiables en todo el país.
            </p>
            <p className="italic font-semibold mb-4 text-lg md:text-2xl text-center text-gray-700">
              En FGM Materiales y Soluciones, no solo construimos estructuras: construimos confianza, eficiencia y soluciones que impulsan el crecimiento de nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <Link
        href="https://wa.me/5493515081452?text=Hola%20quisiera%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50"
      >
        <Image
          src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png"
          alt="WhatsApp"
          width={56}
          height={56}
          className="w-14 h-14 drop-shadow-lg hover:scale-110 transition-transform duration-200"
        />
      </Link>
    </section>
  );
};

export default AboutRender;
