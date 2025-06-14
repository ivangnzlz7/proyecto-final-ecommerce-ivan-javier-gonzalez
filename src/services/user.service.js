import * as userService from '../models/usersModel.js';

export const getAllUser = () => {
    return userService.allUSer();
}

export const userRegister = user => {
    return userService.registerUser(user) 
}

export const userCheck = email => {
    return userService.checkUsers(email);
}