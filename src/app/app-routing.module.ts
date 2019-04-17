import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';

const routes: Routes = [
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts/new', component: AddContactComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'get-in-touch', component: GetInTouchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],   ///registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
