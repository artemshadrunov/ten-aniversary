import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

export interface DogImage {
  message: string;
  status: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  dogImageUrl: any;
  complimentImageUrl: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<DogImage>('https://dog.ceo/api/breeds/image/random').subscribe(r => {
      this.dogImageUrl = r.message;
    });
    this.complimentImageUrl = 'https://photowords.ru/pics_max/photowords_ru_' + this.getRandomArbitrary(5722, 5820) + '.jpg'
  }

  getRandomArbitrary(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
