import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../service/carrinho.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gravar-pedido',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gravar-pedido.component.html',
  styleUrls: ['./gravar-pedido.component.css']
})
export class GravarPedidoComponent implements OnInit {
carrinho() {
throw new Error('Method not implemented.');
}
login() {
throw new Error('Method not implemented.');
}
cadastro() {
throw new Error('Method not implemented.');
}
menu() {
throw new Error('Method not implemented.');
}
  obj = {
    itens: [] as any[],
    total: 0
  };

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  ngOnInit(): void {
    const carrinhoLocal = localStorage.getItem('carrinho');
    if (carrinhoLocal) {
      this.obj.itens = JSON.parse(carrinhoLocal);
      this.calcularTotal();
    }
  }

  removerItem(id: number): void {
    this.obj.itens = this.obj.itens.filter(item => item.id !== id);
    this.calcularTotal();
    localStorage.setItem('carrinho', JSON.stringify(this.obj.itens)); 
  }

  calcularTotal(): void {
    this.obj.total = this.obj.itens.reduce((sum, item) => sum + item.preco, 0);
  }

  limpar(): void {
    const idUsuario = localStorage.getItem('usuarioLogadoId');

    if (!idUsuario) {
    alert('Você precisa estar logado para finalizar a compra.');
    this.router.navigate(['/login']);
    return;
  }
    const dto = {
      valor: this.obj.total,
      produtosCarrinhos: this.obj.itens.map(item => ({
        produto: { id: item.id }
      }))
    };

    this.carrinhoService.finalizarCompra(dto, idUsuario).subscribe({
      next: (mensagem) => {
        alert(mensagem);
        this.obj = { itens: [], total: 0 };
        localStorage.removeItem('carrinho'); // limpa localStorage após sucesso
      },
      error: () => alert('Erro ao finalizar o pedido!')
    });
  }
}
