import mongoose from 'mongoose';

//Conectando ao banco de dados
const connectionString = 'mongodb+srv://dedev:IMsnxD0th18YxNBa@cluster0.mi1p9ay.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Banco de dados funcionando!!!");
  })
  .catch((err) => {
    console.log(err);
  })

export default mongoose;