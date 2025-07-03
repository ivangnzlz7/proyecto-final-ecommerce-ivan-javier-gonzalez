import {
    getAllProducts,
    byIdProduct,
    productCreate,
    categoryByProduct,
    priceByProduct,
    productDeleteById,
    productUpdate,
    updatePartialProduct
} from '../services/product.service.js';
import {
    productValidated,
    categoryValidated,
    minAndMax
} from '../utils/aux.js'

export const allProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const productById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await byIdProduct(id);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createProduct = async (req, res) => {
    const { name, price, stock, category } = req.body;
    try {
        const product = productValidated({name, price, stock, category});
        const newProduct = await productCreate(product);
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const productByCategory = async (req, res) => {
    const category = req.query.category;

    try {
        categoryValidated(category);
        const products = await categoryByProduct(category);
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const productByPrice = async (req, res) => {
    const { min, max } = req.query;
    try {
        minAndMax(min, max);
        const products = await priceByProduct(max, min);
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteProductById = async (req, res) => {
    const id = req.params.id;

    try {
        await productDeleteById(id);
        res.status(200).json({ message: 'Se elimino exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const { name, price, category, stock } = req.body;
    const id = req.params.id;
    try {
        const product = productValidated({name, price,category, stock});
        const productForm = { id, ...product };
        await productUpdate(productForm);
        res.status(200).json({ message: 'Se ha actualizado correctamente' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const partialUpdateProduct = async (req, res) => {
    const { name, price, category, stock } = req.body;
    const id = req.params.id;
    
    try {
        const product = productValidated({name, price, category, stock})
        const productPartial = {id, ...product}
        await updatePartialProduct(productPartial);
        res.status(200).json({ message: 'Se ha actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};