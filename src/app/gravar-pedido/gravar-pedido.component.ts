import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../gravar-pedido/carrinho.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gravar-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gravar-pedido.component.html',
  styleUrl: './gravar-pedido.component.css'

})
export class GravarPedidoComponent implements OnInit {
  itens: any[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.itens = this.carrinhoService.listar();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itens.reduce((soma, item) => soma + item.preco, 0);
  }

  finalizarPedido() {
    alert('Pedido finalizado com sucesso!');
    this.carrinhoService.limpar();
    this.itens = [];
    this.total = 0;
  }
  
}
