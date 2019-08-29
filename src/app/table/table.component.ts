import { Component, OnInit, Input } from '@angular/core';
import { GetDataApiService } from '../service/api.getData.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input("tableJson") tableJson;
  @Input("apiData") apiData;
  @Input("from") from;
  userId;
  dataById;
  constructor(private getDataApi : GetDataApiService) { }
  ngOnInit() {
  }
  getUser(id){
    this.userId = id;
    // this.getDataApi.getDataById(id,this.from).subscribe((res)=>{
    //   this.getDataApi.getDataById(id,this.from).subscribe((res)=>{
    //     this.dataById =res[0];
    //     // console.log(this.dataById);
    //   });      
    // });
  }
  // getUser11(x){
  //   this.dataById=x;
  //   console.log(this.dataById);
  // }
}
