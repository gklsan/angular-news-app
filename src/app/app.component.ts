import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called...');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    console.log('on init');
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    console.log('selected sources is', source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
