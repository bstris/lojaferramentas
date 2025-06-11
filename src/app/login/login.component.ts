import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {Perfil} from '../model/perfil';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = {
    email: '',
    senha: ''
  };

  constructor(private PerfilService: PerfilService, private router: Router) {}

  validarLogin(form: NgForm): void {
    if (form.valid) {
      
      if (form.valid) {
        this.PerfilService.login(this.loginForm.email, this.loginForm.senha).subscribe({
          next: (perfil: Perfil) => {
            if (perfil) {
              localStorage.setItem('usuarioLogado', JSON.stringify(perfil));
              this.router.navigate(['/']);
            } else {
              alert('Email ou senha incorretos!');
            }
          },
          error: () => {
            alert('Erro ao realizar login. Por favor, tente novamente.');
          }
        });
      }else{
        alert('Por favor, preencha todos os campos corretamente!');
        form.resetForm();
      }
     }
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

  menu() {
    location.href = "./";
  }

}