import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../model/perfil';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private readonly api = 'http://localhost:8080/BackEndWeb/api/Perfil'; 
  
  constructor(private http: HttpClient) {}

  listar(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.api);
  }

  buscarPorId(id: number): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.api}/${id}`);
  }

  cadastrar(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(this.api, perfil);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
