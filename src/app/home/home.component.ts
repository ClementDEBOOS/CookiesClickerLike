import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cookies = 0;
  clickerPrice = 10;
  clickers = 0;
  powerPrice = 50;
  power = 0;

  constructor() { }

  ngOnInit() {
    window.setInterval(this.autoincrement.bind(this), 1000);
  }

  addCookies() {
    this.cookies += (1 + this.power);
    return this.cookies;
  }

  addClickers() {
    if (this.clickerPrice <= this.cookies) {
      this.cookies -= this.clickerPrice;
      this.clickerPrice = Math.ceil(this.clickerPrice *= 1.07);
      this.clickers += 1;
    }
  }

  addPower() {
    if (this.powerPrice <= this.cookies) {
      this.cookies -= this.powerPrice;
      this.powerPrice = Math.ceil(this.powerPrice *= 1.07);
      this.power += 1;
    }
  }

  autoincrement() {
    this.cookies += this.clickers;
  }
}
