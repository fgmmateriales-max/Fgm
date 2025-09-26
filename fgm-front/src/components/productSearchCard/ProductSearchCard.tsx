import Link from "next/link";
import { IProduct } from "@/interface/ICategory";

interface Props {
    product: IProduct;
    onClick?: () => void;
}

export const ProductSearchCard: React.FC<Props> = ({ product, onClick }) => (
    <Link
        href={`/productos/${product.id}`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={onClick}
    >
        <span className="font-semibold">{product.name}</span>
        <span className="block text-xs text-gray-500">{product.description}</span>
    </Link>
);
