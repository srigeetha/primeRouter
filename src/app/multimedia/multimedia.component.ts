import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {

  constructor() { }

  images: any[];
    
  ngOnInit() {
      this.images = [];
      this.images.push({source:'assets/images/1.jpg', alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:'assets/images/2.jpg', alt:'Description for Image 2', title:'Title 2'});
      this.images.push({source:'assets/images/3.jpg', alt:'Description for Image 3', title:'Title 3'});
  }
}
