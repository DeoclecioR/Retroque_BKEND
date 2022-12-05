
import User from '../models/Users.js';

//Cria as funções das rotas referente aos usuários
export default {
  async show(request, response) {
    //Para retornar uma quantidade limitada de itens deve-se passar na querystring
    // "/user?limit=<quantidade desejada>"
    const { nome } = request.query;
    const { limit } = request.query;
  
    try {
      const result = nome
      ? await User.find({"nome": nome}).limit(limit)
      : await User.find().limit(limit);
  
      return response.json(result);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },

  async store(request, response) {
    const { nome, endereco, email, senha, contato, formas_de_pagamento } = request.body;
  
    const newUser = {
      nome,
      endereco,
      email,
      senha,
      contato,
      formas_de_pagamento
    }
  
    try {
      const user = await User.create(newUser);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },


  async update(request, response) {
    const { id } = request.params;
    const { nome, endereco, email, senha, contato, formas_de_pagamento } = request.body;
  
    const editedUser = {
      nome,
      endereco,
      email,
      senha,
      contato,
      formas_de_pagamento
    }
    
    try {
      const userUpdateInformation = await User.updateOne({_id: id}, editedUser)
      
      if(userUpdateInformation.matchedCount === 0){
        return response.status(404).json({ error: "Usuario não encontrado." });
      }
      
      return response.json(editedUser);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },

  async destroy(request, response) {
    const { id } = request.params;
  
    try {
      const userDeleteInformation = await User.deleteOne({_id: id})
  
      if(userDeleteInformation.deletedCount === 0){
        return response.status(404).json({ error: "Usuario não encontrado." });
      }
      
      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
};