import mongoose from '../database/index.js';

//Schema da troca
const TradeSchema = new mongoose.Schema({
 
    id_user1: {
      type: String,
      required: true,
    },
    id_item1: {
      type: String,
      required: true,
    },
    id_user2: {
      type: String,
      required: true,
    },
    id_item2: {
      type: String,
      required: true,
    },
  });
  
  
  const Trade = mongoose.model('Trade', TradeSchema);
  ///////////////////////////////////////////////////////////////

  //Exportando modulos
export default Trade;