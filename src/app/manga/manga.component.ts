import { Component, OnInit } from '@angular/core';
import { MangaServiceService, MangaDTO, ChapterDTO } from '../shared/manga-service.service';
import { UtilHelper } from '../shared/utilHelper';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ChaptersDialogComponent } from '../chapters-dialog/chapters-dialog.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {

  public BASED_PATH = this.apiService.DATASTREAM_API_URL;


  public mangas = this.apiService.mangas;
  public imgPlaceholder = this.utilHelper.IMG_PLACEHOLDER;

  constructor(private  apiService:  MangaServiceService,
              private router: Router,
              private utilHelper: UtilHelper,
              public dialog: MatDialog) {
      console.log('MangaComponent', 'Constructor');
   }

  ngOnInit() {
    console.log('MangaComponent', 'ngOnInit');

    // this.route.params.subscribe(params => {
    //  this.currentPage = +params['page']; // (+) converts string 'id' to a number
      console.log('MangaComponent', this.apiService.currentPage);
      if (this.apiService.randomIndexList.length === 0) {
        console.log('MangaComponent', 'getSizeAndMangas');
        this.getSizeAndMangas();
      } else {
        console.log('MangaComponent', 'back');
        const that = this;
        $( document ).ready(function() {
          document.getElementById(that.apiService.preScroll).scrollIntoView(true);
          if (that.apiService.preManga.type === that.utilHelper.MULTI_CHAP) {
            that.goToMangaReader(that.apiService.preManga, that.apiService.preScroll);
          }
        });
      }

    // });

  }

  getSizeAndMangas() {
    this.apiService.getTotalNumOfMangas().subscribe((response) => {
      this.apiService.mangaSize = response.data;
      console.log(this.apiService.mangaSize);
      for (let i = 1; i <= this.apiService.mangaSize; i++) {
        this.apiService.randomIndexList.push(i);
      }
      this.utilHelper.shuffle(this.apiService.randomIndexList);
      this.getMangas();
  });
  }

  getMangas() {
    const startIndex = (this.apiService.currentPage - 1) * this.utilHelper.MANGAS_PER_PAGE;
    const endIndex = this.apiService.currentPage * this.utilHelper.MANGAS_PER_PAGE;
    this.apiService.getMangas(this.apiService.randomIndexList.slice(startIndex, endIndex)).subscribe(response => {
      for (let index = 0; index < response.data.length; index++) {
        const manga: MangaDTO = response.data[index];
        response.data[index].source = this.utilHelper.convertSourceToString(manga.source.toString());
      }
      this.apiService.mangas.push(...response.data);
      this.mangas = this.apiService.mangas;
      console.log(response);
      this.startAndStoploading(false);
    });
  }

  goToMangaReader($manga, $id): void {
    const mangaSource = this.utilHelper.convertStringToSource($manga.source);
    this.apiService.preScroll = $id;
    this.apiService.preManga = $manga;
    if ($manga.type === this.utilHelper.SINGLE_CHAP) {
      this.router.navigate(['manga-reader', $manga.encodedTitle, mangaSource, this.utilHelper.GET_PAGES]);
    } else {
      this.apiService.getMangaPages($manga.encodedTitle, mangaSource).subscribe((response) => {
        this.openDialog($manga, response.data.chapters);
        console.log($id, response);
    });
    }

  }


  openDialog(manga, chapters): void {
    const dialogRef = this.dialog.open(ChaptersDialogComponent, {
      data: {title: manga.title, chapters: chapters}
    });
  }

  nextPage() {
    this.startAndStoploading(true);
    this.apiService.currentPage++;
    // this.mangas = this.apiService.mangas = [];
    this.getMangas();
    // this.router.navigate(['manga', this.currentPage]);
  }


  startAndStoploading(isLoading) {
    if (isLoading) {
      $('#btn-next-id').addClass('spinning');
      $('#btn-next-id').html('Loading mangas');
    } else {
      $('#btn-next-id').removeClass('spinning');
      $('#btn-next-id').html('Next');
    }
  }

}
