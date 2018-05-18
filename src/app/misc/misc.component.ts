import { Component, OnInit } from '@angular/core';
import { MiscService } from './miscService';
import { Imisc } from './miscInter';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {
 
  inplacetext:string="SriGeetha";

  details: Imisc[];
  constructor(private serv: MiscService) {}

  value: number = 40;
  
  ngOnInit() {
    this.details = this.serv.getDetails();
  }

}
