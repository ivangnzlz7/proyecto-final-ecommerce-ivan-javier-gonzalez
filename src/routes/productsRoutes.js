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

routes.get('/products', allProducts);

routes.get('/products/:id', productById);

routes.post('/products', createProduct);

routes.get('/products-category', productByCategory);

routes.get('/products-price', productByPrice);

routes.patch('/products/:id', partialUpdateProduct);

routes.put('/products/:id', updateProduct);

routes.delete('/products/:id', deleteProductById);


export default routes;