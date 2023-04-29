import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { ApiResponse } from '@core/models/api-response.model';
import { Moment } from '@core/models/moment.model';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private apiUrl = `${environment.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) {}

  async create(formData: FormData): Promise<ApiResponse<Moment>> {
    var response$ = this.http.post<ApiResponse<Moment>>(this.apiUrl, formData);
    return lastValueFrom(response$);
  }

  async getMoments(): Promise<ApiResponse<Moment[]>> {
    var response$ = this.http.get<ApiResponse<Moment[]>>(this.apiUrl);
    var { data: moments, ...response } = await lastValueFrom(response$);

    if (!moments?.length) return response;

    var formattedMoments = moments.map((moment) => ({
      ...moment,
      createdAt: new Date(moment.createdAt!).toLocaleDateString('pt-BR'),
    }));

    return { ...response, data: formattedMoments };
  }

  async getMomentById(id: number): Promise<ApiResponse<Moment>> {
    var response$ = this.http.get<ApiResponse<Moment>>(`${this.apiUrl}/${id}`);
    var { data: moment, ...response } = await lastValueFrom(response$);

    if (!moment) return response;

    moment.createdAt = new Date(moment.createdAt!).toLocaleDateString('pt-BR');

    return { ...response, data: moment };
  }
}
