import mongoose from 'mongoose';

export const connectToDatabase = () => {
  //conexão com o banco de dados
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) //conecta ao banco de dados
    .then(() => console.log('Conectado ao MongoDB')) //se conectou, mostra mensagem
    .catch((err) => console.log(err)); //se não conectou, mostra erro
};
