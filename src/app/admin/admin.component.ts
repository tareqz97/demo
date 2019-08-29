import { Component, OnInit } from '@angular/core';
import { BreadcrumpService } from './../breadcrump.service';
import { Admin } from './admin.model';
import { GetDataApiService } from '../service/api.getData.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  href = '';
  activePath = '';
  tableJson = [
    {
      title: 'Id',
    },
    {
      title: 'First Name',
      formName: 'firstName'
    },
    {
      title: 'Last Name',
      formName: 'lastName'
    },
    {
      title: 'User Name',
      formName: 'userName'
    },
    {
      title: 'Address',
      formName: 'address'
    },
    {
      title: 'Phone Number',
      formName: 'phoneNumber'
    },
    {
      title: 'Email',
      formName: 'email',
    },
    {
      title: 'Password',
      formName: 'password',
      show : false

    }
  ];
  admin$;
  from = 'Admin'
  constructor(private breadcrump: BreadcrumpService,private dataService : GetDataApiService) {
    breadcrump.setPath(this.from);
   }
  ngOnInit() {
   this.dataService.getData(this.from).subscribe(data => this.admin$ = data);
  }
  // ngOnInit() {
  //   this.dataService.getAdmin().subscribe((res)=>{
  //     this.apiData = res;
  //   });
  // }

}
