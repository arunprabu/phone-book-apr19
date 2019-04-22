import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/services/shared/user-account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  loremIpsum: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt dolore, culpa repellendus quaerat, iure sint atque libero nostrum consequuntur dignissimos provident laudantium perferendis nesciunt necessitatibus quas pariatur minima fugit?";

  birthday = new Date(1988, 3, 15); // April 15, 1988

  profileSubscription: Subscription;  // Important: Don't forget to unsubscribe

  profileName: string;
  newName: string;

  constructor( private userAccountService: UserAccountService) {
    this.profileSubscription = this.userAccountService.latestUserProfile.subscribe(value => {
      console.log(value);
      this.profileName = value;
    });
  }

  ngOnInit() {

  }

  updateNameHandler(){
    console.log(this.newName);
    //send the new name to common shared service
    this.userAccountService.updateProfileName(this.newName)
  }

}
