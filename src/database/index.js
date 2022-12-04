import mongoose from 'mongoose';

//Conectando ao banco de dados
const connectionString = 'mongodb://127.0.0.1:27017';
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Banco de dados funcionando!!!");
  })
  .catch((err) => {
    console.log(err);
  })

export default mongoose;