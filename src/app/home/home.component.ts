
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bgImagesArray = [  // array of background image names
    'bg1.png',
    'bg2.jpg',
    'bg3.jpg',
    'bg4.jpg',
    'bg5.jpg',
    'bg6.jpg',
    'bg7.jpg',
    'bg8.jpg',
    'bg9.jpg'
  ];
  randomImage = '';
  constructor() { }

  ngOnInit(): void {
    this.randomImage = this.bgImagesArray[Math.floor(Math.random() * 9)]; // on every initialization of component bg image is random
  }


}
