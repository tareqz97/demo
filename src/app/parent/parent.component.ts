import { Component, OnInit } from '@angular/core';
import { BreadcrumpService } from '../breadcrump.service';
import { Parent } from './parent.model';
import { GetDataApiService } from '../service/api.getData.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor(private breadcrump: BreadcrumpService, private dataService: GetDataApiService) {
    breadcrump.setPath('Parent');
  }
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
      title: 'Address',
      formName: 'address'
    },
    {
      title: 'Phone Number',
      formName: 'phoneNumber'
    }
  ];
  parent$: Parent[];
  from = 'Parent'
  ngOnInit() {
    this.dataService.getData(this.from).subscribe(data => this.parent$ = data);
  }

}
