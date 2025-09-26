/* eslint-disable @typescript-eslint/no-explicit-any */

import { getProductosByID } from "@/helper/categorias";

import ProductDetailClient from "./ProductDetailClient";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const producto = await getProductosByID(id);

    if (!producto) {
        return <div className="p-8 text-center text-red-600">Producto no encontrado</div>;
    }

    const productoNormalizado = {
        ...producto,
        box: (producto as any).box ?? (producto as any).Box ?? "",
    };

    const whatsappMessage = `Hola, me gustaría recibir más información sobre el producto "${productoNormalizado.name}". Me ha interesado y quisiera conocer detalles técnicos, disponibilidad y precio. Muchas gracias.`;
    const whatsappUrl = `https://wa.me/5493515081452?text=${encodeURIComponent(whatsappMessage)}`;
    const isBestseller = productoNormalizado.categories?.some((cat: { name: string }) => cat.name === "Más Vendidos");

    return (
        <ProductDetailClient producto={productoNormalizado} isBestseller={isBestseller} whatsappUrl={whatsappUrl} />
    );
}