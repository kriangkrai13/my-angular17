import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  private apiNewsUrl:string = environment.apiNewsUrl;
  private apiNewsKey:string = environment.apiNewsKey;
  constructor(private http:HttpClient){};
  get today(){
    const today =  new Date();
    return today.toISOString().split('T')[0];
  }
  ngOnInit(){
    console.log('News Component');
    this.loadNews();
    this.loadFrontPaper();
  }
  loadNews(){
    this.http.get(`${this.apiNewsUrl}/search-news?language=TH&offset=0&number=10&api-key=${this.apiNewsKey}`).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  loadFrontPaper(){
    this.http.get(`${this.apiNewsUrl}/retrieve-front-page?source-country=th&date=${this.today}&api-key=${this.apiNewsKey}`).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
