import { Component, OnInit } from '@angular/core';
import { BreadcrumpService } from './../breadcrump.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  constructor(private breadcrump: BreadcrumpService) {
    breadcrump.setPath('Teacher');
   }
  ngOnInit() {
  }

}
