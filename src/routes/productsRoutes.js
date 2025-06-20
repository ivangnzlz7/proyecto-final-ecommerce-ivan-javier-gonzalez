import express from 'express';
import {
    allProdcuts,
    productById,
    createProduct,
    productByCategory,
    productByPrice,
    deleteProductById,
    updateProduct,
    partialUpdateProduct
} from '../controllers/productsController.js';
const routes = express.Router();

routes.get('/products', allProdcuts);

routes.get('/products/:id', productById);

routes.post('/products', createProduct);

routes.get('/products-category', productByCategory);

routes.get('/products-price', productByPrice);

routes.patch('/products/:id', partialUpdateProduct);

routes.put('/products/:id', updateProduct);

routes.delete('/products/:id', deleteProductById);


export default routes;