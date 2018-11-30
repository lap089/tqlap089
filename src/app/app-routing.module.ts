import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangaComponent } from './manga/manga.component';
import { HomeComponent } from './home/home.component';
import {MangaReaderComponent} from './manga-reader/manga-reader.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
{ path: 'manga', component: MangaComponent },
{ path: 'manga-reader/:title/:source/:type', component: MangaReaderComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
