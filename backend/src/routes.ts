import {Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

// Rota = conjunto
// Recurso = usuário
// métodos HTTP
// parâmetros

// Query: http://localhost:3333/users?search=anderson&page=2
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users/1 (identificar um recurso)

// MVC
// MODEL    VIEWS   CONTROLLERS

// index, show, create, update, delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes;

// REQ / RES
// localhost:3333

// Driver nativo, Query Builder, ORM
// Object Relational Mapping 

//user/

//User

// 3 users
// User User User