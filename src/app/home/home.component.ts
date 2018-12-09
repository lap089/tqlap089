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
  articles: Array<ArticleDTO>;

  constructor(private router: Router,
    private apiService: ArticleService) {}

  ngOnInit() {
    this.apiService.getArticles().subscribe(response => {
      console.log(response);
      this.articles = response.data;
    });
  }

  viewArticle($pathName) {
    const encodedValue = encodeURIComponent($pathName);
    this.router.navigate(['articles', encodedValue]);
  }
}
