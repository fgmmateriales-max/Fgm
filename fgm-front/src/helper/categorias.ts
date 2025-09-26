
import { categories } from './categorias.seed';
import { productArray } from './productos.seed';

export const getCategorias = async () => {
    return categories;
};



export const getCategoriasId = async (id: string) => {
    return categories.find(c => c.id === id);
};


export const getAllProducts = async () => {
    return productArray;
};


export const getProductosByID = async (id: string) => {
    return productArray.find(p => p.id === id);
};