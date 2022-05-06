import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 
  person : {
    name :string,
    branch: string,
    id: string,
  } = {
    name : '',
    branch: '',
    id: '',
  };
   @Output() studentCreated = new EventEmitter<{
   name:string,
   branch:string,
   id:string
   }>();
  constructor() { 

  }

  ngOnInit(): void {
  }
  // addStudent(){
  //   this.studentCreated.emit(this.name);
  //   this.studentCreated.emit(this.branch);
  //   this.studentCreated.emit(this.id);
    createStudent(){
      this.studentCreated.emit(this.person);
    }
   
    
    
  }




