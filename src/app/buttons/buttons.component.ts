import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }
  clicks: number = 0;

  count() {
      this.clicks++;
  }
  ngOnInit() {
  }

}
