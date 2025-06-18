import express from 'express';
import {
    registerUser,
    checkUser
} from '../controllers/usersController.js';

const routes = express.Router();

routes.post('/register', registerUser);

routes.get('/check-user', checkUser);

export default routes; 