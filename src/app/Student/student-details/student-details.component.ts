import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
// route1 = ActivatedRoute;
name:string = '';
branch:string = '';
id:string = '';

  constructor(private route: ActivatedRoute) { 
//console.log(route.snapshot.queryParams);
//route.queryParams.subscribe()
let person = route.snapshot.queryParams;
this.name = person['name'];
this.branch = person['branch'];
this.id = person['id'];
  }
  ngOnInit(): void {
  }

}
