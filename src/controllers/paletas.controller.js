import {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
} from '../services/paletas.service.js';

import mongoose from 'mongoose';

export const findAllPaletasController = async (req, res) => {
  // rota para listar todas as paletas (GET ALL)
  const allPaletas = await findAllPaletasService(); // chama o serviço para listar todas as paletas
  if (allPaletas.length == 0) {
    // se não existir paletas
    return res.status(404).send({ message: 'Não existe Paleta cadastrada!' }); // retorna mensagem de erro
  }
  res.status(200).send(allPaletas); // retorna todas as paletas
};

export const findByIdPaletaController = async (req, res) => {
  // rota para listar uma paleta (GET BY ID)
  const id_Paleta = req.params.id; // pega o id da paleta
  const chosedPaleta = await findByIdPaletaService(id_Paleta); // busca a paleta com o id
  if (!chosedPaleta) {
    // se não encontrar a paleta
    return res.status(404).send({ message: 'Paleta não encontrada!' }); // retorna um erro 404
  }

  res.send(chosedPaleta); // retorna a paleta
};

export const createPaletaController = async (req, res) => {
  // rota para criar uma paleta (POST)
  const paleta = req.body; // pega o corpo da requisição
  const newPaleta = await createPaletaService(paleta); // chama o serviço para criar uma paleta
  res.status(201).send(newPaleta); // retorna a nova paleta
};

export const updatePaletaController = async (req, res) => {
  // rota para atualizar uma paleta (PUT)
  const id_Paleta = req.params.id; // pega o id da paleta
  const paletaEdit = req.body; // pega o corpo da requisição
  const updatedPaleta = await updatePaletaService(id_Paleta, paletaEdit); // chama o serviço para atualizar uma paleta
  res.send(updatedPaleta);
};

export const deletePaletaController = async (req, res) => {
  // rota para deletar uma paleta (DELETE)
  const id_Paleta = req.params.id;
  // pega o id da paleta
  await deletePaletaService(id_Paleta); // chama o serviço para deletar uma paleta
  res.send({ message: 'Paleta deletada com sucesso' }); // retorna uma mensagem de sucesso
};
