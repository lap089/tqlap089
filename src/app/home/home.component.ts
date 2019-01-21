import { Component, OnInit } from '@angular/core';
import { ArticleDTO, ArticleService } from '../shared/article.service';
import { Router } from '@angular/router';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles = this.apiService.articles;

  constructor(private router: Router, private apiService: ArticleService) {}

  ngOnInit() {
    if (this.articles.length === 0) {
      console.log('HomeComponent', 'getSizeAndMangas');
      this.apiService.getArticles().subscribe(response => {
        console.log(response);
        this.articles = this.apiService.articles = response.data;
      });
    } else {
      console.log('HomeComponent', 'back');
      const that = this;
    }
  }

  viewArticle($pathName) {
    const encodedValue = encodeURIComponent($pathName);
    this.router.navigate(['articles', encodedValue]);
  }
}
