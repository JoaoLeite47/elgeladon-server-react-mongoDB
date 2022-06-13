import mongoose from 'mongoose';

const CarrinhoSchema = new mongoose.Schema({
  nome: {
    type: Number,
    require: true,
  },
  quantidade: {
    type: Number,
    require: true,
  },
}); // cria o esquema do banco de dados

export const Carrinho = mongoose.model('carrinho', CarrinhoSchema);
