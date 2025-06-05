import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PerfilService } from '../services/perfil.service';
import { CommonModule } from '@angular/common';
import { Perfil } from '../model/perfil';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  perfil: Perfil = { nome: '', email: '', senha: '', tipo: 'cliente' };

  constructor(private perfilService: PerfilService) {}

  cadastrarUsuario(form: NgForm): void {
    if (form.valid) {
      this.perfilService.cadastrar(this.perfil).subscribe({
        next: () => {
          alert('Perfil cadastrado com sucesso!');
          form.resetForm();
          this.perfil = { nome: '', email: '', senha: '', telefone: '', tipo: 'cliente' };
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
    location.href = "./gravar-pedido";
  }

  cadastro() {
    location.href = "./cadastro";
  }

  login() {
    location.href = "./login";
  }

  menu() {
    location.href = "./";
  }
}
