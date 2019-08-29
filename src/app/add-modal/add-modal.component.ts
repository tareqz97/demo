import { Component, OnInit, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {GetDataApiService} from '../service/api.getData.service'
@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  @Input('tableJson') tableJson;
  @Input('from') from;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  data = this.profileForm;
  constructor(private getDataApi : GetDataApiService) { }

  ngOnInit() {
  }

}
