import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumpService {
  path;
  constructor() {

   }
   setPath(path){
     this.path = path
   }
   getPath(){
     return this.path;
   }
}
