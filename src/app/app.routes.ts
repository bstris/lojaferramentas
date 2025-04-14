// app.routes.ts
import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { GravarPedidoComponent } from './gravar-pedido/gravar-pedido.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gravar-pedido', component: GravarPedidoComponent },
  { path: 'detalhe-produto', component: DetalheProdutoComponent },
];

