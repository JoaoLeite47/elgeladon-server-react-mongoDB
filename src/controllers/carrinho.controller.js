import {
  findAllCarrinhoService,
  createManyItemsCarrinhoService,
  deleteAllCarrinhoService,
} from '../services/carrinho.service.js';

export const findAllCarrinhoController = async (req, res) => {
  // serviço para listar todas as paletas dentro do carrinho
  const allCarrinho = await findAllCarrinhoService(); // busca todos os itens do carrinho
  if (!allCarrinho) {
    return res.status(404).send({ message: 'Não há itens no carrinho!' }); // retorna erro 404
  }
  res.send(allCarrinho); // retorna todos os itens do carrinho
};

export const createManyItemsCarrinhoController = async (req, res) => {
  // cria um carrinho
  const carrinho = req.body; // pega o corpo da requisição
  const NewCarrinho = await createManyItemsCarrinhoService(carrinho); // cria um novo carrinho
  res.status(201).send(NewCarrinho); // retorna o novo carrinho
};

export const deleteAllCarrinhoController = async (req, res) => {
  // serviço para deletar todos os itens do carrinho
  await deleteAllCarrinhoService(); // deleta todos os itens do carrinho
  res.send({ message: 'Todos os itens foram removidos do carrinho!' }); // retorna mensagem de sucesso
};
