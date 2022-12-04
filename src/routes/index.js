import { Router } from 'express';
import usersRoutes from './users.routes.js';
import itensRoutes from './itens.routes.js';

const routes = Router();

//Implementando as rotas no sistema
routes.use('/user', usersRoutes);
routes.use('/item', itensRoutes);

export default routes;