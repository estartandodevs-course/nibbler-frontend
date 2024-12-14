import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPutReflection, IReflection, ISaveReflectionResponse } from '../models/reflectionInterface';
import { IApiResponseReflexao } from '../models/calendarInterface';

@Injectable({
  providedIn: 'root',
})
export class ReflectionService {
  private readonly apiUrl = 'https://nibbler.estartandodevs.com.br/api/reflexoes';

  constructor(private http: HttpClient) {}

  getReflexao(id: string | null): Observable<IApiResponseReflexao> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IApiResponseReflexao>(url);
  }

  addReflexao(reflexao: IReflection): Observable<ISaveReflectionResponse> {
    return this.http.post<ISaveReflectionResponse>(this.apiUrl, reflexao);
  }

  // Atualiza uma reflexão existente
  putReflexao(id: string | null, reflexao: IPutReflection): Observable<ISaveReflectionResponse> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ISaveReflectionResponse>(url, reflexao);
  }
}
