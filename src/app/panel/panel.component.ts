import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/api';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  msgs: Message[];
    
  index: number = -1;

  onTabClose(event) {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index});
  }
  
  onTabOpen(event) {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  }
  
  openNext() {
      this.index = (this.index === 3) ? 0 : this.index + 1;
  }
  
  openPrev() {
      this.index = (this.index <=0 ) ? 3 : this.index - 1;
  }
  ngOnInit() {
  }

}
