import { generateToken } from '../utils/tokenGenerator.js';
import { checkUsers } from '../models/usersModel.js'

export async function login(req, res) {
    const { email, password } = req.body;
    const userExist = await checkUsers(email);

    if(email === userExist.email && password === userExist.password){
        const token = generateToken(userExist);
        res.json({token})
    } else {
        res.status(401).json({ 'message': 'Unauthorized' })
    }
}