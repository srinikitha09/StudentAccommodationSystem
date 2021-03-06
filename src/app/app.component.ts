import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
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
        orderByChild:'ng',
        equalTo:'Coordinator@srh.com'

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


