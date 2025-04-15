import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe-produto.component.html',
})


export class DetalheProdutoComponent{

  public obj: Produto = new Produto();
  public mensagem: String = "";
  public constructor(){
      let json = localStorage.getItem("produto");
      if(json==null){
        this.mensagem = "Ocorreu um erro de navegação, verifique!";
      } else {
        this.obj = JSON.parse(json);
      }
  }
  public adicionarAoCarrinho(){

  }
}
