import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
    public fname: string;
    public lname: string;
    public mname: string;
    public dob: Date;
    // public birthdate: any;
    public age: number;
    public email: string;
    public cno1: number;
    public cno2: number;
    public address: string;
    public ame: string;

    // editCompObj: Model;
  constructor() { }
  ngOnInit() {  }

// public CalculateAge(): void
//      {
//        if(this.birthdate){
//          var timeDiff;
//          timeDiff=Math.abs(Date.now() - this.birthdate);
//          this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
//        }
//      }

save() {
  console.log(this.fname);
  console.log(this.lname);
  console.log(this.mname);
  console.log(this.dob);
  console.log(this.age);
  console.log(this.email);
  console.log(this.cno1);
  console.log(this.cno2);
  console.log(this.address);
  console.log(this.ame);
  // editCompObj = {
  //   age: ''
  // }
}
reset() {
  console.log(this.fname = '');
  console.log(this.lname = '');
  console.log(this.mname = '');
  // console.log(this.dob='dd-mm-yyyy')
  // console.log(this.age=0)
  console.log(this.email = '');
  // console.log(this.cno1=)
  // console.log(this.cno2=)
  console.log(this.address = '');
  console.log(this.ame = '');
  // editCompObj = {
  //   age: ''
  // }
}
}
