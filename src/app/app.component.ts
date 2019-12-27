import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  href: string;
  showCarousel: boolean;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.href = this.route.url;
    console.log(this.href);
    this.showCarousel = true;
  }
}
