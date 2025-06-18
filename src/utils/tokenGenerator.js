import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Generar token JWT
export const generateToken = ({id, email}) => {
    const user = {id, email};
    const expiration = { expiresIn: '3h' };
    return jwt.sign(user, secret_key, expiration);
}