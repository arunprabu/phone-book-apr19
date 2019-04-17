import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/interfaces/icontact';

declare var $ :any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  contactId: number;
  contactData: IContact;
  editableContactData: IContact;
  updateStatus: string;

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) {
    //find the url parameter: id 
    this.activatedRoute.params.subscribe(params => {
      this.contactId = params['id'];
      console.log(this.contactId); // Print the parameter to the console. 
    });
  }

  ngOnInit() {
    this.contactService.getContactById(this.contactId)
                    .subscribe( (resp: IContact) => { //3. get the response from services 
                      this.contactData = resp;
                    });

  }

  editModalClickHandler(){
    //open modal thru js 
    $('#editModal').modal('show');
    //duplicating object
    this.editableContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  onUpdateHandler(){
    console.log(this.editableContactData);
    //send the data to the service 
    this.contactService.updateContact(this.editableContactData)
                    .subscribe( (resp: IContact) => { //3. get the response from services 
                      this.contactData = resp;
                      //if.. else 
                      this.updateStatus = "Updated Successfully! The modal will autoclose in 3 sec..."
                      setTimeout(() => {
                        $('#editModal').modal('hide');
                      }, 3000);
                    });

  }

}
