// src/app/services/perfil.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UsuarioAutenticado {
  id: number;
  tipo: string;
}
@Injectable({ providedIn: 'root' })
export class PerfilService {
  private baseUrl = 'http://localhost:8080/Perfil'; 

  constructor(private http: HttpClient) {}

  salvar(nome: string, email: string, senha: string, tipo: string, telefone: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/Salvar/${nome}/${email}/${senha}/${tipo}/${telefone}`, null, { responseType: 'text' });
  }

  autenticar(email: string, senha: string): Observable<UsuarioAutenticado> {
    return this.http.get<UsuarioAutenticado>(`${this.baseUrl}/Autenticar/${email}/${senha}`, { responseType: 'text' });
  }
}
