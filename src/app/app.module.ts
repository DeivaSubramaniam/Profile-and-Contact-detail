import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FilePickerModule } from 'angular-file-picker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DairyComponent } from './dairy/dairy.component';
import { FeedComponent } from './feed/feed.component';

import { ContactsModule } from './contacts/contacts.module';

import { routes } from './app.route';
import { MdFormFieldModule, MdPaginator } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { MdDatepickerModule, MdNativeDateModule, MdButtonModule, MdButtonToggleModule, 
  MdTableModule, MdPaginatorModule } from '@angular/material';
import { ImagecontentComponent } from './imagecontent/imagecontent.component';
import { ProfileModule } from "./profile/profile.module";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DairyComponent,
    FeedComponent,
    NavbarComponent,
    HeaderComponent,
    ImagecontentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MdInputModule,
    MdFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    FilePickerModule,
    MdTableModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdPaginatorModule,
    MdFormFieldModule,
    ContactsModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
