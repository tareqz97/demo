import { Component, OnInit,Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {GetDataApiService} from '../service/api.getData.service'
import { TableComponent } from '../table/table.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input('tableJson') tableJson;
  @Input('from') from;
  @Input('userId') userId;
  @Input ('data') userData;
  profileForm;
  constructor(private getDataApi : GetDataApiService,private table : TableComponent) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      phoneNumber: new FormControl(''),
      userName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });

  }
  getDataById(){
    this.profileForm.patchValue({
      firstName:this.userData.firstName,
      lastName :this.userData.lastName,
      address :this.userData.address,
      phoneNumber : this.userData.phoneNumber,
      userName : '',
      email :this.userData.email == null ? ' ': this.userData.email,
      password:''
    });
    console.log(this.profileForm.value);

  }
  onClose(){
    this.profileForm.setValue({
      firstName:'',
      lastName : '',
      address : '',
      phoneNumber : '',
      userName : '',
      email :'',
      password:''
    });
    }
  

}
