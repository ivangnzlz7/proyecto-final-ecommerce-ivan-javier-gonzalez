import express from 'express';
import {
    usersAll,
    registerUser,
    checkUser
} from '../controllers/usersController.js'

const routes = express.Router();

routes.post('/register', registerUser)

routes.get('/users', usersAll)

routes.post('/check-user', checkUser)

export default routes 