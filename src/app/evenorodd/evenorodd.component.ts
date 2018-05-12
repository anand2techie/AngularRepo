import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenorodd',
  templateUrl: './evenorodd.component.html',
  styleUrls: ['./evenorodd.component.css']
})
export class EvenoroddComponent implements OnInit {

  numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  evenNumbers=[2,4,6,8,10,12,14];
  oddNumbers=[1,3,5,7,9,11,13];

  onPageLoad=true;
  isButtonClicked=false;

  isEven=true;

  constructor() { }

  ngOnInit() {
    this.onPageLoad=false;
  }


  showEvenNumbers(){
    this.isButtonClicked=true;
    this.isEven=true;
  }


  showOddNumbers(){
    this.isButtonClicked=true;
    this.isEven=false;
  }
}
