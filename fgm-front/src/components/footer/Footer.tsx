"use client";


import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Gracias por suscribirte: ${email}`);
        setEmail("");
    };

    return (
        <footer className="bg-[#f6f5f3] border-t border-gray-300 mt-12">
            <div className="max-w-8xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="text-sm text-gray-700 flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-gray-800">FGM</h2>
                    <p className="text-gray-600 mt-2">
                        Materiales y soluciones para tu hogar y proyectos.
                    </p>
                    <p>📍 Cruz Espacio, Cordoba</p>
                    <p>📞 <a href="https://wa.me/5493515081452?text=Hola%2C%20necesito%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600 transition">+54 9 351 508 1452</a></p>
                    <p>📧 <a href="mailto:fgmmateriales@gmail.com" className="underline hover:text-blue-600 transition">fgmmateriales@gmail.com</a></p>
                </div>


                <div className="flex flex-col gap-3">

                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-gray-800">NEWSLETTER</h3>
                    <p className="text-sm text-gray-700">Recibí todas las ofertas</p>
                    <p className="text-sm text-gray-600">¡Suscribite gratis y empezá a recibir todas las novedades y descuentos exclusivos!</p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2">
                        <input
                            type="email"
                            required
                            placeholder="Tu correo electrónico"
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto flex-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition"
                        >
                            Suscribirse
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200 px-4">
                © {new Date().getFullYear()} FGM. Todos los derechos reservados.<br />
                <span className="text-gray-400">
                    Desarrollado por{' '}
                    <a
                        href="mailto:alexcr87@live.com.ar"
                        className="underline hover:text-blue-600 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Christian A. Rugna
                    </a>
                    {' '}y Tomas K. Morelli
                </span>
            </div>
        </footer>
    );
}
