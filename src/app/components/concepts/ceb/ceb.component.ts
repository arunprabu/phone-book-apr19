import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {
   //step 1: creating custom event in the name of profileLoaded
   @Output() profileLoaded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendDataToParent(){
    //Step 2: emit the custom event 
    debugger;
    this.profileLoaded.emit("arun");
  }
}
