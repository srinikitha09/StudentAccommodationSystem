import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";


@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  formsitems: FirebaseListObservable<any[]>;
  obj = { };
  objArr = [];
  msgVal: string = '';
  email: string ='';
  title = '.app works!';
  refrencAF: AngularFireDatabase;
  isValid: boolean = false;
  username : string='';
  pwd : string='';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/studentsInformation', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.afAuth.authState;
    this.refrencAF = af;
  }

  ngOnInit() {
  }
  Send() {
    this.username = (<HTMLInputElement>document.getElementById('username')).value;
      if (this.username.length === 0)
      {
alert('please enter the username');
return;
      }
      this.pwd= (<HTMLInputElement>document.getElementById('password')).value;
      if  (this.pwd.length === 0){
        alert('please enter the pwd');
        return;
      }
    this.email = (<HTMLInputElement>document.getElementById('email')).value;

    if  (this.email.length === 0){
      alert('please enter the email id');
      return;
    }

    this.items = this.refrencAF.list('/studentsInformation', {
      query: {
        limitToLast: 50,
        orderByChild:'/studentsInformation/EmailAddress',
        equalTo: this.email
      }

    });

    this.items.subscribe(items => {
      // items is an array
        if ( items.length !== 0 ){
          alert('Alredy Registered');
          return;
        }else{
          this.obj = {
            'Username' : (<HTMLInputElement>document.getElementById('username')).value,
            'Password' : (<HTMLInputElement>document.getElementById('password')).value,
            'Title' : (<HTMLInputElement>document.getElementById('title')).value,
            'FirstName' : (<HTMLInputElement>document.getElementById('fname')).value,
            'LastName' : (<HTMLInputElement>document.getElementById('lname')).value,
            'DateOfBirth' : (<HTMLInputElement>document.getElementById('dob')).value,

            'EmailAddress' : (<HTMLInputElement>document.getElementById('email')).value,
            'MobileNumber' : (<HTMLInputElement>document.getElementById('mobilenumber')).value,
            'EmergencyContact' : (<HTMLInputElement>document.getElementById('emergencycontact')).value,

            'Address' : (<HTMLInputElement>document.getElementById('address')).value,
            'Nationality' : (<HTMLInputElement>document.getElementById('nationality')).value,
            'ExpectedDateOfArrival' : (<HTMLInputElement>document.getElementById('dateOfArrival')).value


          }
        this.items.push({'studentsInformation': this.obj});
        this.msgVal = 'successfully registered';
        alert(this.msgVal);
        return;
        }
      });




  }
  testref(desc: string) {
    this.items = this.refrencAF.list('/studentsInformation', {
      query: {
        limitToLast: 50,
        orderByChild:'/studentsInformation/Emailid',
        equalTo: desc
      }
    });
    alert(this.items);
  }
  buildObject(desc: object) {
    this.obj = ({ test: desc});
    this.objArr.push(this.obj);
    alert(this.formsitems);

  }
}
