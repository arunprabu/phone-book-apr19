import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: []
})
export class SdComponent implements OnInit {

  isLoggedIn: boolean = true;

  navMenus: Array<string> = [
    'home', 'products', 'services', 'contact', 'about'
  ]

  constructor() { }

  ngOnInit() {
  }

}
