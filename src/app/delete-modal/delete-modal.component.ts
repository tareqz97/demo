import { Component, OnInit, Input } from '@angular/core';
import { GetDataApiService } from '../service/api.getData.service';
@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input('userId') userId;
  @Input('from') from;
  constructor(private apiData : GetDataApiService) {
    // apiData.delete(this.userId);
   }

 
  ngOnInit() {
  }

}
