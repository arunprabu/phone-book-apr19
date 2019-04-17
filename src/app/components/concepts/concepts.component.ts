import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {

  loggedInUser: string = "";
  
  constructor() { }

  ngOnInit() {
  }

  onProfileLoadedHandler(msgFromChild){
    this.loggedInUser = msgFromChild;
  }

}
