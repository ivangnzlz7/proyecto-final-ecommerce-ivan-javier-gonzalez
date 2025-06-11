import * as serviceProduct from '../models/productsModel.js'


export const getAllProducts = () => {
    return serviceProduct.getAllProducts();
}
 
export const byIdProduct = id => {
    return serviceProduct.getProductById(id);
}

export const productCreate = product => {
    const { name, price, stock, category } = product
    return serviceProduct.saveProduct(name, price, stock, category);
};

export const categoryByProduct = category => {
    return serviceProduct.productByCategory(category);
}

export const productDeleteById = id => {
    return serviceProduct.deleteByProduct(id);
}

export const productUpdate = product => {
    const { id, name, price, category, stock } = product;
    return serviceProduct.updateProduct(id, name, price, category, stock);
}

export const updatePartialProduct = product => {
    const {id, name, price, category, stock} = product;
    return serviceProduct.partialProductUpdate(id, name, price, category, stock);
}