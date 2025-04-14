import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'
import { CarrinhoService } from './gravar-pedido/carrinho.service';
import { Produto } from './models/app.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lojaferramentas';

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Bolo de Cenoura',
      descricao: 'Bolo de cenoura com cobertura de chocolate 400g',
      preco: 35.99,
      imagem: 'assets/bolo1.jpeg'
    },
    {
      id: 2,
      nome: 'Bolo de Milho com Goiabada',
      descricao: 'Bolo de Milho com Goiabada 400g',
      preco: 25.99,
      imagem: 'assets/bolo2.jpeg'
    },
    {
      id: 3,
      nome: 'Brownie de Chocolate',
      descricao: 'Brownie de Chocolate com casquinha crocante e Gotas de Chocolate',
      preco: 10.99,
      imagem: 'assets/brownie1.jpeg'
    },
    {
      id: 4,
      nome:'Cookie de Baunilha',
      descricao: 'Cookie feito com massa de baunilha e Gotas de chocolate',
      preco: 10.99,
      imagem: 'assets/cookie1.jpeg'
    },
    {
      id: 5,
      nome: 'Torta de Limão',
      descricao: 'Torta gelada de limão com massa crocante e cobertura de merengue',
      preco: 24.99,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/torta-de-limao-simples-01.jpg'
    },
    {
      id: 6,
      nome: 'Bolo de Pote',
      descricao: 'Bolo de pote com massa de chocolate e recheio de brigadeiro',
      preco: 12.00,
      imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/3884f1834bd8f89f2f45c46e2204b3a8_XL.jpg'
    },
    {
      id: 7,
      nome: 'Bolo de Maçã',
      descricao: 'Bolo caseiro de maçã com canela e toque crocante',
      preco: 19.90,
      imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/002/265/356231/356231_original.jpg'
    },
    {
      id: 8,
      nome: 'Brigadeiro',
      descricao: 'Docinho clássico de chocolate com granulado',
      preco: 3.00,
      imagem: 'https://claudia.abril.com.br/wp-content/uploads/2020/03/brigadeiro.jpg'
    },
    {
      id: 9,
      nome: 'Brigadeiro com Morango',
      descricao: 'Brigadeiro recheado com morango inteiro',
      preco: 4.50,
      imagem: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/f2f2f4c91a2504785dc9cf0f18b3b5b0.jpg'
    },
    {
      id: 10,
      nome: 'Mousse de Limão',
      descricao: 'Sobremesa cremosa e gelada com sabor de limão',
      preco: 6.99,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-mousse-de-limao-00.jpg'
    },
    {
      id: 11,
      nome: 'Mousse de Maracujá',
      descricao: 'Mousse de maracujá com calda da fruta por cima',
      preco: 6.99,
      imagem: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/38e9dcd2f12624bfbfcfd02d6f50f715.jpg'
    },
    {
      id: 12,
      nome: 'Temaki de Banana',
      descricao: 'Temaki doce com banana, Nutella e granulado',
      preco: 15.00,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/temaki-de-chocolate-00.jpg'
    },
    {
      id: 13,
      nome: 'Cookies Red Velvet',
      descricao: 'Cookies vermelhos com gotas de chocolate branco',
      preco: 8.99,
      imagem: 'https://www.acasaencantada.com.br/wp-content/uploads/2022/07/Red-Velvet-Cookies-1-1024x683.jpg'
    },
    {
      id: 14,
      nome: 'Cookies de Doce de Leite',
      descricao: 'Cookies recheados com doce de leite argentino',
      preco: 9.90,
      imagem: 'https://img.cybercook.com.br/receitas/101/cookies-com-doce-de-leite-623x350.jpeg'
    }
  ];

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}
  
  adicionarAoCarrinho(produto:Produto): void{
    let carrinho: Produto [] = JSON.parse(localStorage.getItem('carrinho') || '[]');
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} adicionado ao carrinho`);
  }
  verDetalhes(produtoId: number) {
    this.router.navigate(['/detalhe-produto', produtoId]);
  }
}
