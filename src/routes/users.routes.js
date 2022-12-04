import { Router } from 'express';
import usersController from '../controllers/UsersController.js';

//Criando rotas referentes aos usuários
const usersRoutes = Router();


  ///adição
  usersRoutes.post('/', usersController.store);


  ///listagem
  usersRoutes.get('/', usersController.show);


  ///Busca
  usersRoutes.put('/:id', usersController.update);



  ///Exclusão
  usersRoutes.delete('/:id', usersController.destroy);


export default usersRoutes;