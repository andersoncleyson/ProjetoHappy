import express from 'express';
import 'express-async-errors';
import path from 'path'
import routes from './routes';
import errorHandfle from './errors/handle';

import cors from 'cors';

import './database/connection';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandfle);

// Rota = conjunto
// Recurso = usuário
// métodos HTTP
// parâmetros

// Query: http://localhost:3333/users?search=anderson&page=2
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users/1 (identificar um recurso)



app.listen(3333);

// REQ / RES
// localhost:3333

// Driver nativo, Query Builder, ORM
// Object Relational Mapping 

//user/

//User

// 3 users
// User User User