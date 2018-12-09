import { Injectable } from '@angular/core';
import { UtilHelper } from './utilHelper';
import { HttpClient } from '@angular/common/http';

export interface ArticleDTO {
  title: string;
  pathName: string;
  description: string;
  tags: Array<TagDTO>;
}

export interface TagDTO {
  tagId: number;
  name: string;
}
export interface ArticlesResponse {
  data: Array<ArticleDTO>;
}


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  BASED_URL_ARTICLE = this.utilHelper.BASED_URL + '/articles';

  constructor(private http: HttpClient, private utilHelper: UtilHelper) { }

  getArticles() {
    return this.http.get<ArticlesResponse>(this.BASED_URL_ARTICLE);
  }

}
