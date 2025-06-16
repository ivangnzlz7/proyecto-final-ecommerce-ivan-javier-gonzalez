import {
    getAllProducts,
    byIdProduct,
    productCreate,
    categoryByProduct,
    priceByProduct,
    productDeleteById,
    productUpdate,
    updatePartialProduct
} from '../services/product.service.js'

export const allProdcuts = async (req, res) => {
    
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({error: 'Internal server error'})
    }
}

export const productById = async (req, res) => {
    const id = req.params.id;
    const product = await byIdProduct(id);
    
    if(!product){
        res.status(404).json({ message: 'Producto no encontrado' });
        return;
    }
    res.status(200).json(product);
}

export const createProduct = async (req, res) => {

    const { name, price, stock, category } = req.body;
    const products = await getAllProducts();
    const productExist = products.find( product => product.name == name );
    
    //Verificamos que el producto no sea el mismo
    if(productExist){
        res.status(400).json({message: 'No puede crear el mismo producto.'})
        return;
    }
    
    // Verificamos que envien todos los datos
    if(!name || !price || !stock || !category){
        res.status(400).json({message: 'Todos los campos son obligatorios.'})
        return;
    }

    const product = {
        name,
        price,
        stock,
        category
    };    
    try {
        const newProduct = await productCreate(product)
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({error: 'Internal server error'})
    }
}

export const productByCategory = async(req, res) => {
    const category = req.query.category;
   
    try {
        const products = await categoryByProduct(category)
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: 'Ningun producto se encontro' });
    }
}

export const productByPrice = async(req, res) => {
    const { min, max } = req.query
    const maxPrice = Number(max);
    const minPrice = Number(min);
    if(maxPrice === NaN || minPrice === NaN){
        res.status(400).json({message: 'Debe enviar un numero'});
        return
    }
    try {
        const products = await priceByProduct(max, min);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: 'Hubo un error en el proceso'})
    }
}

export const deleteProductById = async (req, res) => {
    const id = req.params.id;

    try {
        await productDeleteById(id);
        res.status(200).json({message: 'Se elimino exitosamente'});
    } catch (error) {
        res.status(404).json({message: 'Algo fallo al eliminar el producto'});
    }
}

export const updateProduct = async (req, res) => {
    const { name, price, category, stock } = req.body;

    if(!name || !price || !stock || !category){
        res.status(400).json({message: 'Todos los campos son obligatorios.'})
        return;
    }
    const id = req.params.id
    const productForm = {
        id,
        name,
        price,
        category,
        stock
    }
    try {
        const product = await productUpdate(productForm);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : 'No se pudo realizar la operacion'})
    }
}

export const partialUpdateProduct = async (req, res) => {
    const { name, price, category, stock } = req.body;
    const id = req.params.id;
    const productPartial = {
        id,
        name,
        price,
        category,
        stock
    }

    try {
        const product = await updatePartialProduct(productPartial);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({message: 'No se encontro el producto'})
    }
}