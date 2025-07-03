import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Verificar token JWT
export const authentication = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1] || null;
        jwt.verify(token, secret_key, (err) => {
            if(err) return res.status(403).json({message : 'Token invalido'});
            next();
        });
    } catch (error) {
        res.status(401).json({message: 'Necesita un token'});
    }
}; 