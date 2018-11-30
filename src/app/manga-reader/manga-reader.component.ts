import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaServiceService } from '../shared/manga-service.service';
import {UtilHelper} from '../shared/utilHelper';

@Component({
  selector: 'app-manga-reader',
  templateUrl: './manga-reader.component.html',
  styleUrls: ['./manga-reader.component.scss']
})
export class MangaReaderComponent implements OnInit, OnDestroy {

  BASED_PATH = this.apiService.DATASTREAM_API_URL;
  mangaPages: Array<string> = [];
  title: string;
  encodedTitle: string;
  source: number;
  type: number;
  imgPlaceholder = this.utilHelper.IMG_PLACEHOLDER;
  private sub: any;

  constructor(private route: ActivatedRoute, private apiService: MangaServiceService, private utilHelper: UtilHelper) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.source = +params['source']; // (+) converts string 'id' to a number
       this.encodedTitle = params['title'];
       this.type = +params['type'];

       if (this.type === this.utilHelper.GET_PAGES) {
        this.apiService.getMangaPages(this.encodedTitle, this.source).subscribe((response) => {
          this.mangaPages  =  response.data.pages;
          this.title = response.data.title;
          this.scrollToTop();
          console.log(response);
        });
       } else {
        this.apiService.getMangaPagesFromChapter(this.encodedTitle).subscribe((response) => {
          this.mangaPages  =  response.data.pages;
          this.title = response.data.title;
          this.scrollToTop();
          console.log(response);
       });
      }

  });
}

  scrollToTop() {
    $( document ).ready(function() {
      document.getElementById('manga-title-id').scrollIntoView(true);
      // window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
