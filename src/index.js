import express from 'express';
import routes from './routes/index.js';

//Inicia o app, passa os parâmetros de execução e rotas
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);



///PORT
// "process.env.PORT" se refere à porta passada pelo Heroku, caso não seja usado, a porta default é 3000


  const port = process.env.PORT || 3333;
  app.listen(port, () => {
    console.log("Servidor funcionando!!!")
  });
  