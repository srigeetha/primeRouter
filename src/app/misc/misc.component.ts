import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) {}

    // confirm() {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure that you want to perform this action?',
    //         accept: () => {
    //             //Actual logic to perform a confirmation
    //         }
    //     });
    // }
  ngOnInit() {
  }

}
