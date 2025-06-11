import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PerfilService } from '../services/perfil.service';
import { CommonModule } from '@angular/common';
import { Perfil } from '../model/perfil';
import { Router } from 'express';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  perfil: Perfil = { nome: '', email: '', senha: '', tipo: 'cliente' };

  constructor(private perfilService: PerfilService, private router: Router) {}

  cadastrarUsuario(form: NgForm): void {
    if (form.valid) {
      this.perfilService.cadastrar(this.perfil).subscribe({
        next: () => {
          alert('Perfil cadastrado com sucesso!');
          form.resetForm();
          this.perfil = { nome: '', email: '', senha: '', telefone: '', tipo: 'cliente' };
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao cadastrar perfil. Verifique o console.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  }

  // Navegação
  carrinho() {
    this.router.navigate = "./gravar-pedido";
  }

  cadastro() {
    this.router.navigate = "./cadastro";
  }

  login() {
    this.router.navigate = "./login";
  }

  menu() {
    this.router.navigate = "./";
  }
}
