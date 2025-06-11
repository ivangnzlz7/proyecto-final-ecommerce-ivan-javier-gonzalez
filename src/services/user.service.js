import * as userService from '../models/usersModel.js';

export const getAllUser = () => {
    return userService.allUSer();
}

export const userRegister = user => {
    const { name, email, password } = user;
    return userService.registerUser(name, email, password)
}

export const userCheck = email => {
    return userService.checkUsers(email);
}