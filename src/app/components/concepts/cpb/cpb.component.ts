import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  //@Input() is a decorator it ensures that myAge becomes property in selector
  @Input() myAge:number = 20; 

  constructor() { }

  ngOnInit() {
  }

}
