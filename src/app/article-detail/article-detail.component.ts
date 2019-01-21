import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDTO } from '../shared/article.service';
import { UtilHelper } from '../shared/utilHelper';
import { PDFProgressData } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: ArticleDTO;
  uri = '';
  isLoading = true;
  isShowing = false;
  pdfTotal = 0;
  pdfLoaded = 0;
  percent = 0;

  constructor(private route: ActivatedRoute, private utilHelper: UtilHelper) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uri =
        this.utilHelper.BASED_URI_PDF + decodeURIComponent(params['uri']);
    });
  }

  onProgress(progressData: PDFProgressData) {
    console.log('Data', progressData);
    this.pdfTotal = progressData.total;
    this.pdfLoaded = progressData.loaded;
    this.percent = Math.round((this.pdfLoaded / this.pdfTotal) * 100);
    if (this.percent >= 100) {
      this.percent = 100;
      this.isLoading = false;
      this.isShowing = true;
    }
  }
}
