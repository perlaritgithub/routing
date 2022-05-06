import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './Student/student-details/student-details.component';
import { StudentsComponent } from './Student/students/students.component';


const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'about',component:AboutComponent },
  { path:'contact',component:ContactComponent },
  { path: 'student',component:StudentsComponent},
  { path: 'student/:id',component: StudentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
