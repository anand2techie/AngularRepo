import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  buttonName='Enable Add Server';

  isDisabled=true;

  constructor() { }

  ngOnInit() {
  }

  enableAddServer(){
    this.isDisabled=false;
    this.buttonName='Disable Add Server';
  }

}
