import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  visibleSidebar1;
    
  visibleSidebar2;
  
  visibleSidebar3;
  
  visibleSidebar4;
  
  visibleSidebar5;

  display: boolean = false;
  constructor(private confirmationService: ConfirmationService){

  }
  showDialog() {
      this.display = true;   
  }
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            
        },
        reject: () => {
          
        }
    });
}

  ngOnInit() {
  }

}
