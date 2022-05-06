import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students: {
  name:string,
  branch:string,
  id:string,
}[] = [];

count: number =10;
  constructor() { 
for (let i = 0; i < this.count; i++){
this.students.push({
name: 'student' + i,
branch: 'branch'+ i,
id: i.toString()
  });
}
 }

  ngOnInit(): void {
  }
  addStudent(person: {
    name:string,
    branch:string,
    id:string,
  }){
    if (person.name  == '' || person.branch == '' || person.id =='' ) return;
   this.students.push(person);
  }
}
  




