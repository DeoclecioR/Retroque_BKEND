
import Trade from '../models/Trades';

//Cria as funções das rotas referente as trocas
export default {
  async show(request, response) {
    //Para retornar uma quantidade limitada de trocas deve-se passar na querystring
    // "/trade?limit=<quantidade desejada>"

    const { limit } = request.query;
  
    try {
      const result = await Trade.find().limit(limit);
  
      return response.json(result);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },

  async store(request, response) {
    const { id_user1, 
            id_item1, 
            id_user2, 
            id_item2, } = request.body;
  
    const newTrade = {
      id_user1, 
      id_item1, 
      id_user2, 
      id_item2
    }
  
    try {
      const trade = await Trade.create(newTrade);
      return response.status(201).json(trade);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },


  async update(request, response) {
    //Deve ser passado o id da troca para atualizar
    // "trade/<id_da_trade>"
    const { id } = request.params;
    const { id_user1, 
            id_item1, 
            id_user2, 
            id_item2 } = request.body;
  
    const editedTrade = {
      id_user1, 
      id_item1, 
      id_user2, 
      id_item2
    }
    
    try {
      const tradeUpdateInformation = await Trade.updateOne({_id: id}, editedTrade)
      
      if(tradeUpdateInformation.matchedCount === 0){
        return response.status(404).json({ error: "Usuario não encontrado." });
      }
      
      return response.json(editedTrade);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },

  async destroy(request, response) {
    //Deve ser passado o id da troca para deletar
    // trade/<id_do_trade>
    const { id } = request.params;
  
    try {
      const tradeDeleteInformation = await Trade.deleteOne({_id: id})
  
      if(tradeDeleteInformation.deletedCount === 0){
        return response.status(404).json({ error: "Usuario não encontrado." });
      }
      
      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
};