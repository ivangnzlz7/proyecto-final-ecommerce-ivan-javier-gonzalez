import {
    userRegister,
    userCheck
} from '../services/user.service.js'

import { checkUsers } from '../models/usersModel.js'

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    const userExist = await checkUsers(email);
    const regexEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if(!name || !email || !password){
        res.status(404).json({message: 'Todos los campos son obligatorios'});
        return;
    }
    if(userExist){
        res.status(404).json({message: 'Ya existe un usuario'});
        return;
    }
    if(password.length < 7){
        res.status(404).json({message: 'El minimo es 7 caracteres'});
        return;
    }
    if(!regexEmail.test(email)){
        res.status(404).json({message: 'El Email es invalido'});
        return;
    }
    const user = {
        name,
        email,
        password
    }
    
    try {
        await userRegister(user);
        res.status(201).json({message: 'Se creo exitosamente'})
    } catch (err) {
        res.status(500).json({message: 'Hubo un error inesperado'})
    }
}

export const checkUser = async (req, res) => {
    const email = req.body.email;

    try {
        const user = await userCheck(email);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message: 'No se encontro ningun usuario'})
    }
}

