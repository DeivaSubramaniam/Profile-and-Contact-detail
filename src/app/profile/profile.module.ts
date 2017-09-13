import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FilePickerModule } from 'angular-file-picker';
import { MdInputModule } from '@angular/material';
import { MdFormFieldModule, MdPaginator } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdDatepickerModule, MdNativeDateModule, MdButtonModule, MdButtonToggleModule, MdTableModule, MdPaginatorModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
    {
        path: 'editprofile',
        component: EditprofileComponent
      },
      {
        path: 'viewprofile',
        component: ViewprofileComponent
      }
    ])
  ],
  declarations: [ViewprofileComponent, EditprofileComponent]
})
export class ProfileModule { }
