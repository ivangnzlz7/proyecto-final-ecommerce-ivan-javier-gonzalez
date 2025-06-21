import express from 'express';
import {
    registerUser,
    checkUser
} from '../controllers/usersController.js';

const routes = express.Router();

// Crea el usuario
routes.post('/register', registerUser);

// Verifica el usuario por email
routes.post('/check-user', checkUser);

export default routes; 