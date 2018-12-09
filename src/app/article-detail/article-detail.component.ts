import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDTO } from '../shared/article.service';
import { UtilHelper } from '../shared/utilHelper';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: ArticleDTO;
  uri: string;

  constructor(
    private route: ActivatedRoute,
    private utilHelper: UtilHelper
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uri = this.utilHelper.BASED_URI_PDF + decodeURIComponent(params['uri']);
    });
  }
}
