import express from 'express';
const routes = express.Router();
import {
    allProducts,
    productById,
    createProduct,
    productByCategory,
    productByPrice,
    deleteProductById,
    updateProduct,
    partialUpdateProduct
} from '../controllers/productsController.js';

// Obtiene todo los productos
routes.get('/products', allProducts);

// Obtiene un producto por ID
routes.get('/products/:id', productById);

// Crea un producto
routes.post('/products/create', createProduct);

// Obtiene productos por categoria
routes.get('/products-category', productByCategory);

// Obtiene productos por precio
routes.get('/products-price', productByPrice);

// Modifica parcialmente el producto por iD
routes.patch('/products/:id', partialUpdateProduct);

// Modifica totalmente el producto por ID
routes.put('/products/:id', updateProduct);

// Elimina el producto por ID
routes.delete('/products/:id', deleteProductById);

export default routes;