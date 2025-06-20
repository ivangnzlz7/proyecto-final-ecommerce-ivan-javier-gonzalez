import { db } from '../data/data.js'
import {
    collection,
    getDocs,
    addDoc
} from 'firebase/firestore';

const usersCollection = collection(db, 'users');

export async function registerUser(user){
    const { name, email, password } = user;
    const createUser = {
        name,
        email, 
        password
    };
    // Creamos el usuario
    return await addDoc(usersCollection, createUser);
}

async function allUSer(){
    const querySnapShot = await getDocs(usersCollection);
    const users = [];
    querySnapShot.forEach( doc => {
        users.push({id: doc.id, ...doc.data()});
    })
    return users;
}

export async function checkUsers(email){
    const users = await allUSer();
    return users.find( user => user.email === email );
}