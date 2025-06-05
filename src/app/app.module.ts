import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

// Importação dos componentes standalone
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { GravarPedidoComponent } from './gravar-pedido/gravar-pedido.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    
    CadastroComponent,
    LoginComponent,
    GravarPedidoComponent,
    DetalheProdutoComponent,
  ],
  providers: [
    provideHttpClient() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
