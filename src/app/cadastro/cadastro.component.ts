import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: '',
    telefone: '',
    senha: ''
  };

  cadastrarUsuario(form: NgForm): void {
    if(form.valid) {
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      alert('Usuário cadastrado com sucesso!');
      form.resetForm();
      this.usuario = { nome: '', email: '', telefone: '', senha: '' };
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  }
}