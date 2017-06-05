
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";
//import { AngularFireStorage } from 'angularfire2/storage';
//import { FirebaseApp } from 'angularfire2';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-student-book-accommodation',
  templateUrl: './student-book-accommodation.component.html',
  styleUrls: ['./student-book-accommodation.component.css']
})
export class StudentBookAccommodationComponent implements OnInit {
  user: Observable<firebase.User>;
  studentBookingList: FirebaseListObservable<any[]>;
  studentPersonal: FirebaseListObservable<any[]>;
  //images: FirebaseListObservable<any[]>;
  formsitems: FirebaseListObservable<any[]>;
  obj = { };
  objArr = [];
  msgVal: string = '';
  title = 'app works!';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {



    this.studentBookingList = af.list('/studentsBookingData', {
      query: {
        limitToLast: 50
      }
    });
    this.studentPersonal = af.list('/studentsInformation', {
      query: {
        limitToLast: 50
      }
    });



    debugger;
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
    this.applyAccommodation();
          $("#firstname").val("nikitha");

    $( function() {
      $( "#tabs" ).tabs();
    } );
  }
  Send() {
    this.obj = {
      'BuildingName' : (<HTMLInputElement>document.getElementById('buildingName')).value,
      'RoomType' : (<HTMLInputElement>document.getElementById('roomType')).value,
      'size' : '15qm',
      'Rent' : 220,
      'AvailableFrom' : (<HTMLInputElement>document.getElementById('from')).value,
      'To' : (<HTMLInputElement>document.getElementById('to')).value
    }
    this.studentBookingList.push({'studentsBookingData': this.obj});
    this.msgVal = '';
  }
  buildObject(desc: object) {
    this.obj = ({ test: desc});
    this.objArr.push(this.obj);
    alert(this.formsitems);
  }

  applyAccommodation(){
    $( "#tabs-1" ).show();
  $( "#tabs-2" ).hide();
  $( "#tabs-3" ).hide();
    $( "#contract" ).hide();
    $("#paymentMode").hide();
    $("#summary").hide();
  }

  personalInfo(){
    $( "#tabs-1" ).hide();
    $( "#tabs-2" ).show();
    $( "#tabs-3" ).hide();
    $( "#contract" ).hide();
    $("#paymentMode").hide();
    $("#summary").hide();
  }

  moreInfo(){
    $( "#tabs-1" ).hide();
    $( "#tabs-2" ).hide();
    $( "#tabs-3" ).show();
    $( "#contract" ).hide();
    $("#paymentMode").hide();
    $("#summary").hide();
  }
  contractInfo(){
    $( "#tabs-1" ).hide();
    $( "#contract" ).show();
    $( "#tabs-2" ).hide();
    $( "#tabs-3" ).hide();
    $("#paymentMode").hide();
    $("#summary").hide();
  }

  paymentMode(){
    $( "#tabs-1" ).hide();
    $( "#contract" ).hide();
    $( "#tabs-2" ).hide();
    $( "#tabs-3" ).hide();
    $("#paymentMode").show();
    $("#summary").hide();
  }
  summary(){
    $( "#tabs-1" ).hide();
    $( "#contract" ).hide();
    $( "#tabs-2" ).hide();
    $( "#tabs-3" ).hide();
    $("#paymentMode").hide();
    $("#summary").show();
  }
}


