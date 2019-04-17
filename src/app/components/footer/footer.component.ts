import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <hr>
    <div class="text-center">
      <app-nav>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to top</a>
        </li>
      </app-nav>
    </div>
    <p class="copy">Copyright &copy; 2019</p>
  ` ,
  styles: [
    `
      p{
        text-align:center;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
