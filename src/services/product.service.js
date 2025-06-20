import {
    allProductsGet,
    getProductById,
    productByCategory,
    saveProduct,
    productByPrice,
    deleteByProduct,
    updateProduct,
    partialProductUpdate
} from '../models/productsModel.js';

export const getAllProducts = () => {
    return allProductsGet();
};

export const byIdProduct = id => {
    return getProductById(id);
};

export const productCreate = product => {
    return saveProduct(product);
};

export const categoryByProduct = category => {
    return productByCategory(category);
};

export const priceByProduct = ( max, min ) => {
    return productByPrice(max, min);
};

export const productDeleteById = id => {
    return deleteByProduct(id);
};

export const productUpdate = product => {
    return updateProduct(product);
};

export const updatePartialProduct = product => {
    return partialProductUpdate(product);
};