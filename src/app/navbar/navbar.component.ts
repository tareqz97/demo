import { Component, OnInit } from '@angular/core';
import {BreadcrumpService} from '../breadcrump.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pages = [
    {
      name: 'Home',
      routerLink : 'home'
    },
    {
      name :'Admin',
      routerLink :'admin'
    },
    {
      name : 'Teacher',
      routerLink :'teacher'
    },
    {
      name : 'Student',
      routerLink :'student'
    },
    {
      name : 'Parent',
      routerLink :'parent'
    }

  ];
  constructor(public path : BreadcrumpService) {
    
   }
  ngOnInit() {
  }
   
} 