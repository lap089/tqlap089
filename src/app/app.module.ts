import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaComponent } from './manga/manga.component';
import { HttpClientModule } from '@angular/common/http';
import { MangaReaderComponent } from './manga-reader/manga-reader.component';
import { HomeComponent } from './home/home.component';
import { ChaptersDialogComponent } from './chapters-dialog/chapters-dialog.component';
import {MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagePlaceholderDirective } from './shared/image-placeholder.directive';
import { NguiInViewComponent } from './ngui-in-view/ngui-in-view.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    MangaComponent,
    MangaReaderComponent,
    HomeComponent,
    ChaptersDialogComponent,
    ImagePlaceholderDirective,
    NguiInViewComponent,
    AboutMeComponent,
    ArticleDetailComponent
  ],
  entryComponents: [
    ChaptersDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
