import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BreadcrumpService} from '../breadcrump.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor(private breadcrump: BreadcrumpService) {
    breadcrump.setPath('Parent');
   }

  ngOnInit() {
  }

}
