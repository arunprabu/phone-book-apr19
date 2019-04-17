import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/interfaces/icontact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {
  contactsSubscription: Subscription;
  contactList: IContact[];

  constructor(private contactService: ContactService) {
    console.log("1. Inside Constructor");
  }

  ngOnInit() {
    console.log("2. Inside ngOnInit");
    this.contactsSubscription = this.contactService.getContacts()
                        .subscribe( (resp: IContact[]) => { //3. get the response from services 
                          if(resp && resp.length > 0){
                            this.contactList = resp;  
                          }
                        });
  }

  ngOnDestroy(){
    //life cycle hooks 
    console.log("ngOnDestroy");
    this.contactsSubscription.unsubscribe();
    // clear the intervals
    // clear the data loaded 
  }

}
