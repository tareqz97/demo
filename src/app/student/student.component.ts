import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumpService } from './../breadcrump.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(private breadcrump: BreadcrumpService) {
    breadcrump.setPath('Student');
   }

  ngOnInit() {
  }

}
