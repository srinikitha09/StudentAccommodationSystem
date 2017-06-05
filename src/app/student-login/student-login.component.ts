import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit
{


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
  dbPwd: String='';

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

    this.email = (<HTMLInputElement>document.getElementById('emailid')).value;
    this.pwd = (<HTMLInputElement>document.getElementById('pwd')).value;

    this.items = this.refrencAF.list('/studentsInformation', {
      query: {
        limitToLast: 50,
        orderByChild:'/studentsInformation/EmailAddress',
        equalTo: this.email
      }

    });

    this.items.subscribe(items => items.forEach(item =>{
    if (this.pwd === item.studentsInformation.Password && this.email === item.studentsInformation.EmailAddress)
    {
      alert("successfully logged");
      return;
    }
     else {
    alert("please enter valid mail id and password");
    return;
}}
));
}
}
