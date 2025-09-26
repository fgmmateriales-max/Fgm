import React from "react";

const sliderItems = [
  "Agendá tu visita y conocé nuestro showroom",
  "Teléfono: +54 3515081452",
  "Atención personalizada",
  "Dirección: Ramón Cárcano 120, X5003HGO Córdoba"
];

export const TextSlider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F6F5F3] h-14  flex items-center border border-[#F0EDEA] shadow-md rounded-xl px-2 sm:px-4">
      <div className="animate-marquee flex min-w-full">
        {[...sliderItems, ...sliderItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 shrink-0 whitespace-nowrap"
          >
            <p className="text-black text-[10px] sm:text-xs md:text-sm font-medium">
              {item}
            </p>
            <span className="hidden sm:inline text-gray-400">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider