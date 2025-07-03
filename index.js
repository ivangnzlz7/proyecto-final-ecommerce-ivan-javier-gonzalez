import express from 'express';
import productsRouter from './src/routes/productsRoutes.js';
import authRouter from './src/routes/auth.routes.js';
import bodyParser from 'body-parser';
import { undefinedRoute } from './src/middlewares/routeUndefined.js';
import users from './src/routes/usersRoutes.js';
import cors from 'cors';
import path from 'path';

const __dirname = import.meta.dirname;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/user', users);
app.use('/auth', authRouter);
app.use('/api', productsRouter);
app.use(undefinedRoute);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = 3500;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
