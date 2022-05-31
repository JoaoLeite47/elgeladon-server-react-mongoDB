import express from 'express';

import cors from 'cors';

import { route } from './src/routes/paletas.route.js';

import { connectToDatabase } from './src/database/database.js';

const app = express(); // instancia do express

connectToDatabase(); // chama a função de conexão com o banco de dados

app.use(express.json()); // permite que o express entenda json

app.use(cors()); // permite que as rotas sejam acessadas pelo frontend

app.use('/paletas', route); // define a rota para acesso aos dados

const port = 3001; // porta padrão

app.listen(port, () => {
  // inicia o servidor
  console.log(`Servidor rodando em http://localhost:${port}`); // mensagem de sucesso
});
