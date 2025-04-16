import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carrinho } from '../model/carrinho';

@Component({
  selector: 'app-gravar-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gravar-pedido.component.html',
  styleUrl: './gravar-pedido.component.css'
})
export class GravarPedidoComponent implements OnInit {
  public mensagem: string = '';
  public obj: Carrinho = new Carrinho();

  constructor() {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const json = localStorage.getItem('carrinho');
      if (json === null) {
        this.mensagem = 'Seu carrinho está vazio!!!';
      } else {
        this.obj = JSON.parse(json);
      }
    }
  }

  limpar(): void {
    this.obj = new Carrinho();
    if (typeof window !== 'undefined') {
      localStorage.removeItem('carrinho');
    }
    this.mensagem = 'Seu carrinho está vazio!!!';
  }

  finalizarPedido(): void {
    // Implementar lógica de finalização
  }
  
}


  
  
 