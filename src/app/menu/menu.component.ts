import { Component, OnInit } from '@angular/core';
import {MenuItem,Message} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private items: MenuItem[];

  items1: MenuItem[];

  steps: MenuItem[];

  msgs: Message[] = [];
    
  activeIndex: number = 1;

  previous(){
      this.activeIndex = this.activeIndex-1;
  }
  next(){
      
    this.activeIndex = this.activeIndex+1;
}
  ngOnInit() {
    this.steps =[{
        label: 'Personal',
        command: (event: any) => {
            this.activeIndex = 0;
            this.msgs.length = 0;
            this.msgs.push({severity:'info', summary:'First Step', detail: event.item.label});
        }
    },
    {
        label: 'Seat',
        command: (event: any) => {
            this.activeIndex = 1;
            this.msgs.length = 0;
            this.msgs.push({severity:'info', summary:'Seat Selection', detail: event.item.label});
        }
    },
    {
        label: 'Payment',
        command: (event: any) => {
            this.activeIndex = 2;
            this.msgs.length = 0;
            this.msgs.push({severity:'info', summary:'Pay with CC', detail: event.item.label});
        }
    },
    {
        label: 'Confirmation',
        command: (event: any) => {
            this.activeIndex = 3;
            this.msgs.length = 0;
            this.msgs.push({severity:'info', summary:'Last Step', detail: event.item.label});
        }
    }
];


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
