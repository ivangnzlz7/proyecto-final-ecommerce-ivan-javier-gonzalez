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
const userPath = path.join(__dirname, '../data/users.json');
const usersCollection = collection(db, 'users');

export async function registerUser(name, email, password){
    const users = await allUSer();

    const createUser = {
        name,
        email,
        password
    };
    // Creamos el usuario
    await addDoc(usersCollection, createUser);

    /*
    fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
    return createUser;*/
}

export async function allUSer(){
    const querySnapShot = await getDocs(usersCollection)
        const users = [];
        querySnapShot.forEach( doc => {
            users.push({id: doc.id, ...doc.data()});
        })
        return users;
    /*
    const data = fs.readFileSync(userPath, 'utf-8');  
    return JSON.parse(data);
    */
}

export async function checkUsers(email){
    const users = await allUSer();
    return users.find( user => user.email === email );
}