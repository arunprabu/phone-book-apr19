import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {
  submissionStatus: string;
  
  constructor( private contactService: ContactService) { // 2. connect to service 

  }

  ngOnInit() {
  }

  addContactHandler(formData) { // 1. get data from html form 
    console.log(formData);
    this.contactService.createContact(formData.value)
                      .subscribe( resp => { //3. get the response from services 
                        console.log("resp", resp);
                        //if. else logic to check the status of the req 
                        this.submissionStatus = "Thanks! Contact added";
                      });
  }

}
