import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Carrinho } from '../model/carrinho';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {
  title = 'lojaferramentas';
  public mensagem: String = "";
  termoBusca: string = '';
  produtos: Produto[] = [
    { id: 1, nome: 'Bolo de Cenoura', descricao: 'Bolo de cenoura com cobertura de chocolate 400g', preco: 35.99 },
    { id: 2, nome: 'Bolo de Milho com Goiabada', descricao: 'Bolo de Milho com Goiabada 400g', preco: 25.99 },
    { id: 3, nome: 'Brownie de Chocolate', descricao: 'Brownie de Chocolate com casquinha crocante e Gotas de Chocolate', preco: 10.99 },
    { id: 4, nome:'Cookie de Baunilha', descricao: 'Cookie feito com massa de baunilha e Gotas de chocolate', preco: 10.99 },
    { id: 5, nome: 'Torta de Limão', descricao: 'Torta gelada de limão com massa crocante e cobertura de merengue', preco: 24.99 },
    { id: 6, nome: 'Bolo de Pote', descricao: 'Bolo de pote com massa de chocolate e recheio de brigadeiro', preco: 12.00 },
    { id: 7, nome: 'Bolo de Maçã', descricao: 'Bolo caseiro de maçã com canela e toque crocante', preco: 19.90 },
    { id: 8, nome: 'Brigadeiro', descricao: 'Docinho clássico de chocolate com granulado', preco: 3.00 },
    { id: 9, nome: 'Brigadeiro com Morango', descricao: 'Brigadeiro recheado com morango inteiro', preco: 4.50 },
    { id: 10, nome: 'Mousse de Limão', descricao: 'Sobremesa cremosa e gelada com sabor de limão', preco: 6.99 },
    { id: 11, nome: 'Mousse de Maracujá', descricao: 'Mousse de maracujá com calda da fruta por cima', preco: 6.99 },
    { id: 12, nome: 'Temaki de Banana', descricao: 'Temaki doce com banana, Nutella e granulado', preco: 15.00 },
    { id: 13, nome: 'Cookies Red Velvet', descricao: 'Cookies vermelhos com gotas de chocolate branco', preco: 8.99 },
    { id: 14, nome: 'Cookies de Doce de Leite', descricao: 'Cookies recheados com doce de leite argentino', preco: 9.90 }
  ];

  produtosFiltrados: Produto[] = [];

  constructor() {
    this.produtosFiltrados = [...this.produtos];
  }

  buscar(): void {
    const termo = this.termoBusca.trim().toLowerCase();
  
    if (termo === '') {
      
      this.produtos = this.produtos;
    } else {
      
      this.produtos = this.produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termo)
      );
    }
  }
  

  adicionarAoCarrinho(item: Produto): void {
    if (typeof window === 'undefined') return;

    let json = localStorage.getItem("carrinho");
    let carrinho: Carrinho = json ? JSON.parse(json) : new Carrinho();

    carrinho.itens = carrinho.itens ?? [];
    carrinho.total = carrinho.total ?? 0;

    carrinho.itens.push(item);
    carrinho.total += item.preco;

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`${item.nome} adicionado ao carrinho`);

    location.href = "/gravar-pedido";
  }

  carrinho() {
    location.href = "./gravar-pedido";
  }

  cadastro() {
    location.href = "./cadastro";
  }

  login() {
    location.href = "./login";
  }

  detalhe(obj: Produto) {
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe-produto";
  }
}
