import { Paleta } from '../models/Paleta.js';

export const findAllPaletasService = async () => {
  const allPaletas = await Paleta.find();
  // serviço para listar todas as paletas
  return allPaletas; // retorna todas as paletas
};

export const findByIdPaletaService = async (id_Paleta) => {
  // serviço para listar uma paleta
  const findPaleta = await Paleta.findById(id_Paleta);
  return findPaleta; // busca a paleta com o id e retorna o valor
};

export const createPaletaService = async (newPaleta) => {
  //  criar uma paleta
  const paletaCreated = await Paleta.create(newPaleta); // cria uma paleta
  return paletaCreated; // retorna o novo objeto
};

export const updatePaletaService = async (id_Paleta, paletaEdit) => {
  // serviço para atualizar uma paleta
  const paletaUpdated = await Paleta.findByIdAndUpdate(id_Paleta, paletaEdit); // atualiza a paleta
  return paletaUpdated; // retorna o objeto editado
};

export const deletePaletaService = async (id_Paleta) => {
  // serviço para deletar uma paleta
  return await Paleta.findByIdAndDelete(id_Paleta); // deleta a paleta
};
