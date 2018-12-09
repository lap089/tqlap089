import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSection($id) {
    console.log($id);
    document.getElementById($id).scrollIntoView(true);
  }

  viewPdf($path) {
    const uri = encodeURIComponent($path);
    console.log(uri);
    this.router.navigate(['articles', uri]);
  }
}
