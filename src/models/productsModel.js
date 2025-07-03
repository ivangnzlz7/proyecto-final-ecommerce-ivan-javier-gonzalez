import fs from 'fs';
import path from 'path';
import { db } from '../data/data.js'
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
} from 'firebase/firestore';

const __dirname = import.meta.dirname;

const dataPath = path.join(__dirname, '../data/products.json');
const productsCollection = collection(db, 'products');


// Ordena los productos por stock de forma ascendente
async function orderProduct(){
    const products = await allProductsGet();
    products.sort((a, b) => a.stock - b.stock);
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
};


export async function getProductById(id) {
    const productDocs = await allProductsGet();
    return productDocs.find( product => {
        return product.id == id
    });
};

export async function allProductsGet(){
    const querySnapShot = await getDocs(productsCollection);
    const products = [];
    querySnapShot.forEach( doc => {
        products.push({id: doc.id, ...doc.data()});
    })
    // sino hay nada en la base de datos, devuelve los productos localmente
    if(products.length < 1){
        const data = fs.readFileSync(dataPath, 'utf-8');
        return JSON.parse(data);
    };
    return products;
};

export async function saveProduct(product){
    const { name, price, category, stock } = product;
    const products = await allProductsGet();
    const productSave = {
        name,
        price,
        category,
        stock 
    };
    products.push(productSave); 
    //Guardamos localmente y ordenamos
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    orderProduct();
    //Guardamos en firebase
    await addDoc(productsCollection, productSave); 
    return productSave;
};

export async function productByCategory(category){
    const products = await allProductsGet();
    return products.filter( product => product.category == category );
};

export async function productByPrice(max, min) {
    const products = await allProductsGet();
    return products.filter( product => {
        return product.price >= min && product.price <= max
    });
};

export async function deleteByProduct(id){
    return await deleteDoc(doc(productsCollection, id));
};

export async function updateProduct(products){
    const {id, ...props } = products;
    // Actualizamos el producto por ID
    return await updateDoc(doc(productsCollection, id), props);
};

export async function partialProductUpdate(products){
    const { id, name, price, category, stock } = products;
    //Buscamos el producto
    const product = await getProductById(id);
    const producPartial = {
        id,
        name: name || product.name,
        price: price || product.price,
        category: category || product.category,
        stock: stock || product.stock
    }
    // Actualizamos parcialmente
    return await updateProduct(producPartial);
};
