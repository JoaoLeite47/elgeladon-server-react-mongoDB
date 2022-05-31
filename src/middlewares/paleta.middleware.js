import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const id_Paleta = req.params.id; // pega o id da paleta

  if (!mongoose.Types.ObjectId.isValid(id_Paleta)) {
    // se o id não for um número
    return res.status(400).send({ message: 'id inválido!' }); // retorna um erro 400
  }
  next();
}; // verifica se o id é válido

export const validObjectBody = (req, res, next) => {
  const paleta = req.body; // pega o corpo da requisição
  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    // se não tiver todos os dados
    return res.status(404).send({ message: 'Envie todos os dados da paleta!' }); // retorna erro 400
  }
  next();
}; // verifica se o corpo da requisição é válido

export const ValidObjectBodyCarrinho = (req, res, next) => {
  // verifica se o corpo da requisição é válido
  const carrinho = req.body; // pega o corpo da requisição
  carrinho.forEach((item) => {
    if (!item || !item.paletaId || !item.quatidade) {
      return res
        .status(404)
        .send({ message: 'Envie todos os dados do carrinho!' }); // retorna erro 400
    }
  });
  next();
};
