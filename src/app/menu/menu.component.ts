import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private items: MenuItem[];

  items1: MenuItem[];

  ngOnInit() {
    this.items1 = [
      {label: 'Stats', icon: 'fa-bar-chart'},
      {label: 'Calendar', icon: 'fa-calendar'},
      {label: 'Documentation', icon: 'fa-book'},
      {label: 'Support', icon: 'fa-support'},
      {label: 'Social', icon: 'fa-twitter'}
  ];
      this.items = [{
          label: 'File',
          items: [
              {label: 'New', icon: 'fa-plus'},
              {label: 'Open', icon: 'fa-download'}
          ]
      },
      {
          label: 'Edit',
          items: [
              {label: 'Undo', icon: 'fa-refresh'},
              {label: 'Redo', icon: 'fa-repeat'}
          ]
      }];
  }
  constructor() { }

}
