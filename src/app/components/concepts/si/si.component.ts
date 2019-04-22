import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {
  //
  appName: string ="Phone Book App"; //string
  year: number = 2019;  //number
  isLoggedIn: boolean = false; //boolean

  //array
  skillset: any[] = [
    'html', 'java', 'js', 101, 102
  ]

  //array another way
  skillset1 : Array<any> = [

  ]


  //object another way
  myProfile1: Object = {

  }


  constructor() { }

  ngOnInit() {
  }

  add(a, b){
    return a+b;
  }

}
