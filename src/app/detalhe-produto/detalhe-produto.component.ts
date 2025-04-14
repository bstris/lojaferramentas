import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from '../gravar-pedido/carrinho.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  imports: [CommonModule],
})
export class DetalheProdutoComponent implements OnInit {
  produto: any;

  produtos = [
    { id: 1, nome: 'Bolo de Cenoura', preco: 35.99, descricao: 'Bolo de cenoura com chocolate', imagem: 'assets/bolo1.jpeg' },
    { id: 2, nome: 'Bolo de Milho com Goiabada', preco: 25.99, descricao: 'Bolo de milho com goiabada', imagem: 'assets/bolo2.jpeg' },
    { id: 3, nome: 'Brownie de Chocolate', preco: 10.99, descricao: 'Brownie crocante', imagem: 'assets/brownie1.jpeg' },
    { id: 4, nome: 'Cookie de Baunilha', preco: 10.99, descricao: 'Cookie de baunilha', imagem: 'assets/cookie1.jpeg' },
  ];

  constructor(private route: ActivatedRoute, private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtos.find(p => p.id === id);
  }

  adicionarAoCarrinho() {
    this.carrinhoService.adicionar(this.produto);
    alert(`${this.produto.nome} adicionado ao carrinho!`);
  }
}
