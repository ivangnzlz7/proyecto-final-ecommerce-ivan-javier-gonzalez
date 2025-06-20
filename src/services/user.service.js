import { 
    registerUser, 
    checkUsers 
}from '../models/usersModel.js';

export const userRegister = user => {
    return registerUser(user); 
};

export const userCheck = email => {
    return checkUsers(email);
};