import DetailPro from "@/components/detailProduct/DetailPro";
import { getCategoriasId, getAllProducts } from "@/helper/categorias";

export default async function Category({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const categoria = await getCategoriasId(id);
    const allProducts = await getAllProducts();

    if (!categoria) {
        return <div className="p-8 text-center text-red-600">Categoría no encontrada</div>;
    }

    // Filtrar productos que tengan la categoría seleccionada

    const products = allProducts
        .filter((product) =>
            product.categories?.some((cat: { name: string }) => cat.name === categoria.name)
        )
        .map((product) => ({
            ...product,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            box: (product as any).box ?? (product as any).Box ?? "",
        })) as import("@/interface/ICategory").IProduct[];

    return (
        <div>
            <DetailPro products={products} />
        </div>
    );
}