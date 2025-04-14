import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: any[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser && localStorage.getItem('carrinho')) {
      this.carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    }
  }

  adicionar(produto: any) {
    this.carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  listar() {
    return this.carrinho;
  }

  limpar() {
    this.carrinho = [];
    localStorage.removeItem('carrinho');
  }
  
}
