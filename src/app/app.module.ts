import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentsComponent } from './Student/students/students.component';
import { StudentDetailsComponent } from './Student/student-details/student-details.component';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './Student/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StudentsComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
