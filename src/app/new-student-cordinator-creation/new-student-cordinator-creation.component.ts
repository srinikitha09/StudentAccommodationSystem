import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-new-student-cordinator-creation',
  templateUrl: './new-student-cordinator-creation.component.html',
  styleUrls: ['./new-student-cordinator-creation.component.css']
})

export class NewStudentCordinatorCreationComponent implements OnInit {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  formsitems: FirebaseListObservable<any[]>;
  obj = { };
  objArr = [];
  msgVal: string = '';
  title = 'app works!';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/studentCoordinatorsInfo', {
      query: {
        limitToLast: 50,


      }
    });
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }


  Send() {
    this.obj = {
      'FirstName' : (<HTMLInputElement>document.getElementById('FirstName')).value,
      'LastName' : (<HTMLInputElement>document.getElementById('LastName')).value,
      'Emailid' : (<HTMLInputElement>document.getElementById('email')).value,
      'Languages' : 'English',
      'AvailableFrom' : (<HTMLInputElement>document.getElementById('fromDate')).value,
      'To' : (<HTMLInputElement>document.getElementById('toDate')).value,
      'MobileNumber' : (<HTMLInputElement>document.getElementById('mobile')).value
    }
    this.items.push({'studentCoordinatorsInfo': this.obj});
    this.msgVal = '';
  }
  buildObject(desc: object) {
    this.obj = ({ test: desc});
    this.objArr.push(this.obj);
    alert(this.formsitems);
  }
}
