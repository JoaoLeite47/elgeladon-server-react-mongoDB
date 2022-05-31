import mongoose from 'mongoose';

const CarrinhoSchema = new mongoose.Schema({
  paletaId: {
    type: String,
    require: true,
  },
  quatidade: {
    type: Number,
    require: true,
  },
}); // cria o esquema do banco de dados

export const Carrinho = mongoose.model('carrinho', CarrinhoSchema);
