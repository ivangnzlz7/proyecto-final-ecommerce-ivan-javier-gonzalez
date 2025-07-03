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
import { authentication } from '../middlewares/authentication.js'

/* Rutas publicas */
 
// Obtiene todos los productos
routes.get('/products', allProducts);

// Obtiene un producto por ID
routes.get('/products/:id', productById);

// Filtra productos por categoria
routes.get('/products-category', productByCategory);

// Filtra productos por precio
routes.get('/products-price', productByPrice);


/* Rutas con autorizacion */

// Crea un producto
routes.post('/products/create', authentication, createProduct);

// Modifica parcialmente el producto por iD
routes.patch('/products/:id', authentication, partialUpdateProduct);

// Modifica totalmente el producto por ID
routes.put('/products/:id', authentication, updateProduct);

// Elimina el producto por ID
routes.delete('/products/:id', authentication, deleteProductById);

export default routes;