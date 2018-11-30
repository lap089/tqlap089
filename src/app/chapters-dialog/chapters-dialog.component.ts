import { Component, OnInit, Inject } from '@angular/core';
import { MangaPageListDTO, MangaServiceService } from '../shared/manga-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilHelper} from '../shared/utilHelper';

@Component({
  selector: 'app-chapters-dialog',
  templateUrl: './chapters-dialog.component.html',
  styleUrls: ['./chapters-dialog.component.scss']
})
export class ChaptersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChaptersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MangaPageListDTO,
    private apiService: MangaServiceService,
    private utilHelper: UtilHelper,
    private router: Router) { }

  ngOnInit() {

  }

  goToMangaReader(chapter) {
    this.dialogRef.close();
    this.router.navigate(['manga-reader', chapter.reference, this.utilHelper.SOURCE_HT2READ, this.utilHelper.GET_PAGES_FROM_CHAPTER]);
  }

}
