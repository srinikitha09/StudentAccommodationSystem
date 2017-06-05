import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentBookAccommodationComponent } from './student-book-accommodation/student-book-accommodation.component';
import { NewStudentCordinatorCreationComponent } from './new-student-cordinator-creation/new-student-cordinator-creation.component';
import { StudentLoginComponent } from './student-login/student-login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDuTJsnGTP_bdcLDCBnBzbYE3r_Eej_JUY",
  authDomain: "crudtest-421e1.firebaseapp.com",
  databaseURL: "https://crudtest-421e1.firebaseio.com",
  projectId: "crudtest-421e1",
  storageBucket: "crudtest-421e1.appspot.com",
  messagingSenderId: "692920515179"
};



@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    StudentBookAccommodationComponent,
    NewStudentCordinatorCreationComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: 'studentRegistration',
        component: StudentRegistrationComponent
      },
      {
        path: 'studentBookAccommocation',
        component: StudentBookAccommodationComponent
      },
      {
      path: 'newStudentCoordinatorCreation',
        component: NewStudentCordinatorCreationComponent
      },
      {
        path: 'studentLogin',
        component: StudentLoginComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
