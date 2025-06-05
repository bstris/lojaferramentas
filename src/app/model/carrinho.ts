import { ProdutoCarrinho } from './produto-carrinho';
import { Perfil } from './perfil';

export interface Carrinho {
  id?: number;
  total: number;
  produtos: ProdutoCarrinho[];
  comprador: Perfil;
}
