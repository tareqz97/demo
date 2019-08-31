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
  id;
  profileForm;
  data;
  firstName :string;
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
    this.data = this.profileForm;
  }
  getDataById(){
    this.id = this.userData.id;
    console.log(this.id);
    this.firstName = 'firstName'+this.id;
    document.getElementById('x').id = this.id;
    // document.getElementById('x').id = this.id;
    // console.log(this.id);
    // // this.profileForm.get('firstName').setValue(this.userData.firstName);
    // this.profileForm.patchValue({
    //   firstName:this.userData.firstName,
    //   lastName :this.userData.lastName,
    //   address :this.userData.address,
    //   phoneNumber : this.userData.phoneNumber,
    //   userName : '',
    //   email :this.userData.email == null ? ' ': this.userData.email,
    //   password:''
    // });
    //  (<HTMLInputElement>document.getElementById('firstName150')).value = "adsfdas";

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
