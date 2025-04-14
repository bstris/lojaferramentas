import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  validarLogin(form: NgForm): void {
    if (form.valid) {
      const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
      
      if (usuario.email === this.loginForm.email && usuario.senha === this.loginForm.senha) {
        alert('Login realizado com sucesso!');
        localStorage.setItem('usuarioLogado', 'true');
        this.router.navigate(['/']);
      } else {
        alert('Email ou senha incorretos!');
      }
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  }
}