import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {
  yearNow: string;
  appVersion: string;

  constructor() {
  }

  ngOnInit() {
    this.yearNow = new Date().getFullYear().toString();
    this.appVersion = 'V X.X.X';
  }
}
