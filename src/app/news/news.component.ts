import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  private apiUrl:string = '';
  private apiKey:string = '';
  ngOnInit(){
    console.log('News Component');
  }
  loadNews(){

  }
}
