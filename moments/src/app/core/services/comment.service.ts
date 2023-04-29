import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@core/models/api-response.model';

import { Comment } from '@core/models/comment.model';

import { environment } from 'environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = `${environment.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) {}

  async create(comment: Comment): Promise<ApiResponse<Comment>> {
    var apiUrl = `${this.baseApiUrl}/${comment.momentId}/comments`;
    var response$ = this.http.post<ApiResponse<Comment>>(apiUrl, comment);
    return lastValueFrom(response$);
  }
}
