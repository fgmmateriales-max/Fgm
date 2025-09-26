/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { ICategory, IProduct } from "@/interface/ICategory";
import { useState } from "react";
import { ProductSearchCard } from "@/components/productSearchCard/ProductSearchCard";
import { productArray } from "@/helper/productos.seed";

interface ICategorias {
  categorias: ICategory[]
}

export const Navbar: React.FC<ICategorias> = ({ categorias }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setShowResults(true);

    if (value.length > 1) {
      setLoading(true);
      const filtered = productArray.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(value.toLowerCase());
        const descMatch = p.description.toLowerCase().includes(value.toLowerCase());
        const categoryMatch = Array.isArray(p.categories)
          ? p.categories.some((cat) => cat.name.toLowerCase().includes(value.toLowerCase()))
          : false;
        return nameMatch || descMatch || categoryMatch;
      }).map((p) => ({
        ...p,
        box: (p as any).box ?? (p as any).Box ?? "",
      }));
      setResults(filtered);
      setLoading(false);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  return (
    <nav className="w-full border-b border-gray-300 shadow-sm bg-white">
      <div className="max-w-8xl mx-auto flex items-center justify-between p-3">
        <Link href="/" className="flex flex-col items-center">
          <Image src="/assets/logo.png" alt="Logo FGM" width={60} height={60} className="h-15 w-auto mb-1" />
        </Link>

        <div className="hidden md:flex gap-10 text-gray-700 font-medium text-m items-center">
          <Link href="/">INICIO</Link>
          <button
            className="flex items-center gap-1 px-2 py-1"
            onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            CATEGORIAS
          </button>
          <Link href="/catalogos">CATÁLOGOS</Link>
          <Link href="/about">ABOUT</Link>
        </div>

        <div className="hidden md:flex items-center border border-gray-400 rounded-full px-4 py-2 gap-2 w-72 relative">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="flex-grow focus:outline-none text-sm text-gray-700"
            value={search}
            onChange={handleSearch}
          />
          <IoSearchSharp className="text-gray-600" size={20} />
          {loading && <div className="absolute top-full left-0 w-full bg-white text-center text-xs py-2">Buscando...</div>}
          {results.length > 0 && showResults && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded shadow z-50 mt-2">
              {results.map((p) => (
                <ProductSearchCard key={p.id} product={p} onClick={() => setShowResults(false)} />
              ))}
            </div>
          )}
        </div>
      </div>
      {isDesktopDropdownOpen && (
        <div className="w-full flex justify-center gap-4 py-2 bg-white border-b border-gray-200">
          {categorias.map(cat => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.id}`}
              className="px-5 py-2 rounded-full bg-gray-100 text-gray-800 font-medium shadow hover:bg-gray-200 transition-all flex items-center justify-center"
              style={{ border: 'none', minWidth: '120px', textAlign: 'center', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span className="w-full text-center flex items-center justify-center">{cat.name.toUpperCase()}</span>
            </Link>
          ))}
        </div>
      )}
      {/* Responsive navbar*/}
      <div className="md:hidden w-full bg-white border-t border-gray-200 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2 py-1 w-full">
          <Link href="/" className="px-2 py-1 text-gray-700 font-medium text-xs">INICIO</Link>
          <button
            className="px-2 py-1 text-gray-700 font-semibold bg-transparent border-none text-xs"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ cursor: 'pointer' }}
          >
            CATEGORIAS
          </button>
          <Link href="/catalogos" className="px-2 py-1 text-gray-700 font-medium text-xs">CATÁLOGOS</Link>
          <Link href="/about" className="px-2 py-1 text-gray-700 font-medium text-xs">ABOUT</Link>
        </div>
        <div className="w-full flex justify-center pb-1">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="w-11/12 border border-gray-300 rounded-full px-3 py-1 text-xs focus:outline-none"
            value={search}
            onChange={handleSearch}
          />
          <IoSearchSharp className="text-gray-600 ml-2 mt-1" size={18} />
        </div>
        {isDropdownOpen && (
          <div className="w-full flex flex-col items-center gap-1 py-1">
            <div className="flex justify-center gap-1 w-full">
              {categorias.slice(0, 3).map(cat => (
                <Link
                  key={cat.id}
                  href={`/categorias/${cat.id}`}
                  className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 font-medium text-[0.7rem] shadow hover:bg-gray-200 transition-all"
                  style={{ border: 'none', minWidth: '70px', textAlign: 'center', fontSize: '0.75rem', lineHeight: '1.1' }}
                >
                  {cat.name.toUpperCase()}
                </Link>
              ))}
            </div>
            <div className="flex justify-center gap-1 w-full mt-1">
              {categorias.slice(3).map(cat => (
                <Link
                  key={cat.id}
                  href={`/categorias/${cat.id}`}
                  className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 font-medium text-[0.7rem] shadow hover:bg-gray-200 transition-all"
                  style={{ border: 'none', minWidth: '70px', textAlign: 'center', fontSize: '0.75rem', lineHeight: '1.1' }}
                >
                  {cat.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};