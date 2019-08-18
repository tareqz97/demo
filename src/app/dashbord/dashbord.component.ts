import { BreadcrumpService } from './../breadcrump.service';
import { Card } from './dashbord.card';
import { Component, OnInit } from '@angular/core';
import {} from '../breadcrump.service'
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  path;
  cards :Card[] = [
    new Card('Name','','../../assets/image/contact.png'),
    new Card('Email','','../../assets/image/email.png'),
    new Card('Phone Number','','../../assets/image/phone.png'),
    new Card('Address','','../../assets/image/location.png')
  ];
  ngOnInit() {
  }
  constructor(private breadcrump: BreadcrumpService) {
    breadcrump.setPath('Home');
   }
}
