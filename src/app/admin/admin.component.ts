import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumpService } from './../breadcrump.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  href = '';
  activePath = '';
  
  constructor(private breadcrump: BreadcrumpService) {
    breadcrump.setPath('Admin');
   }
   
  ngOnInit() {
  }

}
