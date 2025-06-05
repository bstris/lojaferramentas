import { Produto } from './produto';

export interface ProdutoCarrinho {
  id?: number;
  produto: Produto;
  quantidade: number;
}
