import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
// import {FormControl, Validators} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import {MdIconRegistry} from '@angular/material';
import {FormGroup, FormsModule, FormControl, Validators, FormBuilder, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

public date;
public calculateage;
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(EMAIL_REGEX)]);
 constructor() {}

//  dateOfBirth(name) {
//    localStorage.setItem('sample', name);
//     // var ageDifMs = Date.now() - name;
//     // var ageDate = new Date(ageDifMs); // miliseconds from epoch
//     // this.calculateage = Math.abs(ageDate.getUTCFullYear() - 1970);
//  }


//   onSave(form)
//   // tslint:disable-next-line:one-line
//   {
//     console.log(form);
//     localStorage.setItem('sample', form );
//   }
   ngOnInit() {
  }

}
