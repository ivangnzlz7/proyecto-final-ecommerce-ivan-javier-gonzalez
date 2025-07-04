import {
    userRegister,
    userCheck
} from '../services/user.service.js';
import { userValidated, emailValidated } from '../utils/aux.js'
import { checkUsers } from '../models/usersModel.js';

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await checkUsers(email);
    if(userExist){
        res.status(404).json({message: 'Ya existe un usuario'});
        return;
    }
    
    try {
        const user = userValidated({name, email, password});
        await userRegister(user);
        res.status(201).json({message: 'Se creo exitosamente'});
    } catch (err) {
        res.status(404).json({message: err.message});
    }
};

export const checkUser = async (req, res) => {
    const email = req.body.email;

    try {
        emailValidated(email);
        const user = await userCheck(email);
        if(!user){
            res.status(400).json({message : 'No se encontro el usuario'});
        };
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

