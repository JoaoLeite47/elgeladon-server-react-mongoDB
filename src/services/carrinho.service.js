import { Carrinho } from '../models/Carrinho.js';

export const findAllCarrinhoService = async () => {
  // serviço para listar todas as paletas dentro do carrinho
  const allCarrinho = await Carrinho.find(); // busca todos os itens do carrinho
  return allCarrinho; // retorna todos os itens do carrinho
};

export const createManyItemsCarrinhoService = async (newCarrinho) => {
  // cria um carrinho
  const createdCarrinho = await Carrinho.insertMany(newCarrinho); // cria um novo carrinho
  return createdCarrinho; // retorna o novo carrinho
};

export const deleteAllCarrinhoService = async () => {
  return await Carrinho.deleteMany(); // deleta todos os itens do carrinho
};
