import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UtilHelper } from '../shared/utilHelper';

export interface MangaPageListReponse {
  data: MangaPageListDTO;
}
export interface ChapterDTO {
  title: string;
  reference: string;
}
export interface MangaPageListDTO {
  title: string;
  pages: Array<string>;
  chapters: Array<ChapterDTO>;
}

export interface MangaSize {
  data: number;
}

export interface MangaListReponse {
  data: Array<MangaDTO>;
}
export interface MangaDTO {
  title: string;
  encodedTitle: string;
  imagePath: String;
  source: String;
  type: String;
}

@Injectable({
  providedIn: 'root'
})
export class MangaServiceService {
  BASED_URL_MANGA = this.utilHelper.BASED_URL + '/manga';
  MANGAS_API_URL = this.BASED_URL_MANGA + '/mangas';
  MANGA_PAGES_API_URL = this.BASED_URL_MANGA;
  MANGA_PAGES_CHAPTER_API_URL = this.BASED_URL_MANGA + '/chapter';
  DATASTREAM_API_URL = this.BASED_URL_MANGA + '/datastream?imagePath=';
  MANGA_COUNT_API_URL = this.BASED_URL_MANGA + '/size';

  public mangaSize: number;
  public randomIndexList: Array<number> = [];
  public mangas: Array<MangaDTO> = [];
  public currentPage = 1;
  public preScroll = '';
  public preManga: MangaDTO = null;

  constructor(private http: HttpClient, private utilHelper: UtilHelper) {
    console.log('MangaService', 'Constructor');
  }

  getTotalNumOfMangas() {
    return this.http.get<MangaSize>(this.MANGA_COUNT_API_URL);
  }

  getMangas(indexList) {
    let params = new HttpParams();
    params = params.append('indexMangas', indexList.join(', '));
    return this.http.get<MangaListReponse>(this.MANGAS_API_URL, {
      params: params
    });
  }

  getMangaPagesFromChapter(chapterPath) {
    let params = new HttpParams();
    params = params.append('chapterPath', chapterPath);
    return this.http.get<MangaPageListReponse>(
      this.MANGA_PAGES_CHAPTER_API_URL,
      { params: params }
    );
  }

  getMangaPages(encodedTitle, mangaSource) {
    let params = new HttpParams();
    params = params.append('mangaTitle', encodedTitle);
    params = params.append('mangaSource', mangaSource);
    return this.http.get<MangaPageListReponse>(this.MANGA_PAGES_API_URL, {
      params: params
    });
  }
}
