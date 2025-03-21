import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiNewsUrl:string = environment.apiNewsUrl;
  private apiNewsKey:string = environment.apiNewsKey;
  constructor(private http:HttpClient) { }

  getNews():Observable<any>{
    return this.http.get<any[]>(`${this.apiNewsUrl}/serch-news?language=th@offset=0&limit=10&api-key=${this.apiNewsKey}`);
  }
}
