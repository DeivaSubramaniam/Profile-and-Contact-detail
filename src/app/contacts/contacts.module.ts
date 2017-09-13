import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'add-new-contact',
        component: AddContactComponent
      },
      {
        path: 'my-contacts',
        component: MyContactsComponent
      }
    ])
  ],
  declarations: [MyContactsComponent, AddContactComponent]
})
export class ContactsModule { }
