/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'https://nibbler.estartandodevs.com.br/api/usuario'; // Substitua com o URL correto da API

  constructor(private http: HttpClient) {}

  // Método para enviar os dados do formulário para a API
  cadastrarUsuario(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}
