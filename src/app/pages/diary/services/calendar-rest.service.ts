import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseReflexoes } from '../models/calendarInterface';
import { IEmotionApiResponse } from '../models/emotionInterface';

@Injectable({
  providedIn: 'root',
})
export class CalendarRestService {
  constructor(private _http: HttpClient) {}
  private url = 'https://nibbler.estartandodevs.com.br/api/reflexoes/usuario/8d11e3c0-6c6c-4d56-e623-08dd1a327e31';
  private emotionsUrl = 'https://nibbler.estartandodevs.com.br/api/emocoes';

  getAllRegisters(): Observable<IApiResponseReflexoes> {
    return this._http.get<IApiResponseReflexoes>(this.url);
  }
  getEmotions(): Observable<IEmotionApiResponse> {
    return this._http.get<IEmotionApiResponse>(this.emotionsUrl);
  }

  checkRegisterByDate(date: string): Observable<IApiResponseReflexoes> {
    const checkUrl = `${this.url}?date=${date}`;
    return this._http.get<IApiResponseReflexoes>(checkUrl);
  }
}
