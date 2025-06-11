import {
    getAllUser,
    userRegister,
    userCheck
} from '../services/user.service.js'

import { checkUsers } from '../models/usersModel.js'

 
export const usersAll = async (req , res) => {

    try {
        const users = await getAllUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: 'Fallo interno'})
    }
}

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    const userExist = await checkUsers(email);
    if(userExist){
        res.status(404).json({message: 'Ya existe un usuario'})
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
    } catch (error) {
            res.status(500).json({message: 'Error al crear el usuario'})
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