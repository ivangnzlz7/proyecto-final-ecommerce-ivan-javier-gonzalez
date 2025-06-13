import fs from 'fs';
import path from 'path';
import { db } from '../data/data.js'
import {
    collection,
    getDocs,
    addDoc
} from 'firebase/firestore';

const __dirname = import.meta.dirname;
const userPath = path.join(__dirname, '../data/users.json');
const usersCollection = collection(db, 'users');

export async function registerUser(name, email, password){
    const users = await allUSer();
    const createUser = {
        name,
        email,
        password
    };
        
    //Guardamos el usuario creado localmente
    users.push(createUser);
    fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
    // Creamos el usuario
    return await addDoc(usersCollection, createUser);
}

export async function allUSer(){
    const querySnapShot = await getDocs(usersCollection)
        const users = [];
        querySnapShot.forEach( doc => {
            users.push({id: doc.id, ...doc.data()});
        })
        if(users.length < 1){
            // Obtenemos todos los usuarios localmente
            const data = fs.readFileSync(userPath, 'utf-8');  
            return JSON.parse(data);
        }
        return users;
}

export async function checkUsers(email){
    const users = await allUSer();
    return users.find( user => user.email === email );
}