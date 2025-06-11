import express from 'express';
import productsRouter from './src/routes/productsRoutes.js';
import authRouter from './src/routes/auth.routes.js';
import bodyParser from 'body-parser';
import { authentication } from './src/middlewares/authentication.js';
import users from './src/routes/usersRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Rutas
app.use('/user', users)
app.use('/auth', authRouter)
app.use('/api', authentication, productsRouter);

app.get('/', (req, res) => {
    res.send('<h1>Inicio de servidor con express</h1>');
});

const PORT = 3500;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
