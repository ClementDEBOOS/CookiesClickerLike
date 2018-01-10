import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cookies = 0;
  clickerPrice = 10;
  clickers = 0;

  constructor() { }

  ngOnInit() {
    window.setInterval(this.autoincrement.bind(this), 1000);
  }

  addCookies() {
    this.cookies += 1;
    return this.cookies;
  }

  addClickers() {
    if (this.clickerPrice <= this.cookies) {
      this.cookies -= this.clickerPrice;
      this.clickerPrice = Math.ceil(this.clickerPrice *= 1.07);
      this.clickers += 1;
    }
  }

  autoincrement() {
    this.cookies += this.clickers;
  }
}
