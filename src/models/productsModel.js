import fs from 'fs';
import path from 'path';
import { db } from '../data/data.js'
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

const __dirname = import.meta.dirname;

const dataPath = path.join(__dirname, '../data/products.json');
const productsCollection = collection(db, 'products');

/*
//Ordena los productos
function orderProduct(){
    const products = getAllProducts();
    products.sort((a, b) => a.id - b.id);
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2))
}
*/

export async function getProductById(id) {
    const productDocs = await getAllProducts();
    const product = productDocs.find( product => product.id === id ) || null
    return product;
    /*
    const products = getAllProducts();
    return products.find( product => product.id === id );
    */
}

export async function getAllProducts(){

    const querySnapShot = await getDocs(productsCollection)
    const products = [];
    querySnapShot.forEach( doc => {
        products.push({id: doc.id, ...doc.data()});
    })
    return products;
    // Todos los productos localmente
    /*
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
    */
}

export async function saveProduct(product){

    const { name, price, category, stock } = product;
    // const products = await getAllProducts();
    const productSave = {
        name,
        price,
        category,
        stock 
    }
    /*
    products.push(productSave); */
    
        //Guardamos en firebase
        await addDoc(productsCollection, productSave); 
        /*
        // Guardamos localmente
        fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));*/
        return productSave;
    
};

export async function productByCategory(category){
    const products = await getAllProducts();
    return products.filter( product => product.category == category );
}

export async function deleteByProduct(id){
    /*
    const products = await getAllProducts();
    const productJson = products.filter( product => product.id !== id ); */
    
    await deleteDoc(doc(productsCollection, id))
    /*
    fs.writeFileSync(dataPath, JSON.stringify(productJson, null, 2));
    return productJson;*/
}

export async function updateProduct(products){
    const {id, name, price, category, stock } = products
    // Eliminamos el producto
    await deleteByProduct(id);
    // Creamos el producto apartir del producto borrado
    const newProduct = {
        name,
        price,
        category,
        stock
    }
    const product =  await saveProduct(newProduct);
    return product;
    /*
    const productsFilter = products.filter( product => product.id !== id );
    productsFilter.push(productUpdate);
    fs.writeFileSync(dataPath, JSON.stringify(productsFilter, null, 2));
    //Ordenamos los productos
    orderProduct();
    return productUpdate;*/
}

export async function partialProductUpdate(products){
    const { id, name, price, category, stock } = products
    //Buscamos el producto
    const product = await getProductById(id)
    
    // Actualizamos parcialmente
    const producPartial = {
        name: name || product.name,
        price: price || product.price,
        category: category || product.category,
        stock: stock || product.stock
    }

    //Eliminamos el producto 
    await deleteByProduct(id);

    //Creamos el producto
    const producto = await saveProduct(producPartial);
    return producto;
    /*
    const productFilter = products.filter( product => product.id !== id );
    productFilter.push(producPartial)
    fs.writeFileSync(dataPath, JSON.stringify(productFilter, null, 2));
    // Ordenamos los productos
    orderProduct();
    return producPartial; */
}
