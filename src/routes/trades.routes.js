import { Router } from 'express';
import tradesController from '../controllers/TradesController.js';

//Criando rotas referentes aos itens
const tradesRoutes = Router();


  ///adição
  tradesRoutes.post('/', tradesController.store);


  ///listagem
  tradesRoutes.get('/', tradesController.show);


  ///Busca
  tradesRoutes.put('/:id', tradesController.update);



  ///Exclusão
  tradesRoutes.delete('/:id', tradesController.destroy);


export default tradesRoutes;