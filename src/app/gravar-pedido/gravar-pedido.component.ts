import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carrinho } from '../model/carrinho';
import { Router } from '@angular/router';

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
  router: any;

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
    location.href = "./"
    alert(`Compra finalizada`);
  }
  removerItem(index: number) {
    this.obj.itens.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(this.obj.itens));
    this.mensagem = 'Item removido do carrinho!';
    setTimeout(() => this.mensagem = '', 3000);
  }
  finalizarPedido(): void {
  }
  menu() {
    location.href = "./";
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
}


  
  
 