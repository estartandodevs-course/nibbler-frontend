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
  private url = 'http://localhost:5030/api/reflexoes/usuario/3a770a96-302e-494e-773b-08dd1a60a9c9';
  private emotionsUrl = 'http://localhost:5030/api/emocoes';

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
