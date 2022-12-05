import Item from '../models/Itens.js';

//Cria as funções das rotas referente aos itens
export default {
  async show(request, response) {
    //Para retornar uma quantidade limitada de itens deve-se passar na querystring
    // "/item?limit=<quantidade desejada>"
    const { categoria } = request.query;
    const { limit } = request.query;
    try {
      const result = categoria
      ? await Item.find({"categoria": categoria}).limit(limit)
      : await Item.find().limit(limit);
    
  
      return response.json(result);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },

  async store(request, response) {
    const { 
      nome,
      descricao,
      valor,
      categoria,
      quantidade,
      formas_de_entrega,
      formas_de_pagamento } = request.body;

    const owner_id = request.query.owner_id;
  
    const newItem = {
      nome,
      descricao,
      valor,
      categoria,
      owner_id,
      quantidade,
      formas_de_entrega,
      formas_de_pagamento
    }
  
    try {
      const item = await Item.create(newItem);
      return response.status(201).json(item);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },


  async update(request, response) {
    const { id } = request.params;
    
    const { 
      nome,
      descricao,
      valor,
      categoria,
      quantidade,
      formas_de_entrega,
      formas_de_pagamento } = request.body;
  
    const editedItem = {
      nome,
      descricao,
      valor,
      categoria,
      quantidade,
      formas_de_entrega,
      formas_de_pagamento
    }
    
    try {
      const itemUpdateInformation = await Item.updateOne({_id: id}, editedItem)
      
      if(itemUpdateInformation.matchedCount === 0){
        return response.status(404).json({ error: "Item não encontrado." });
      }
      
      return response.json(editedItem);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },

  async destroy(request, response) {
    const { id } = request.params;
  
    try {
      const itemDeleteInformation = await Item.deleteOne({_id: id})
  
      if(itemDeleteInformation.deletedCount === 0){
        return response.status(404).json({ error: "Item não encontrado." });
      }
      
      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
};