import * as serviceProduct from '../models/productsModel.js'


export const getAllProducts = () => {
    return serviceProduct.getAllProducts();
}
 
export const byIdProduct = id => {
    return serviceProduct.getProductById(id);
}

export const productCreate = product => {
    return serviceProduct.saveProduct(product);
};

export const categoryByProduct = category => {
    return serviceProduct.productByCategory(category);
}

export const priceByProduct = ( max, min ) => {
    return serviceProduct.productByPrice(max, min);
}

export const productDeleteById = id => {
    return serviceProduct.deleteByProduct(id);
}

export const productUpdate = product => {
    return serviceProduct.updateProduct(product);
}

export const updatePartialProduct = product => {
    return serviceProduct.partialProductUpdate(product);
}