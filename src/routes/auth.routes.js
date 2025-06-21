import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

// Verificacion del usuario y obtiene un token
router.post('/login', login);

export default router;