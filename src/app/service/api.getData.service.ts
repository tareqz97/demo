import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../admin/admin.model';
import { Parent } from '../parent/parent.model';


@Injectable({
  providedIn: 'root'
})
export class GetDataApiService {
  constructor(private _http: HttpClient) { }
  /////////////////// get data from api
  getData(from) {
    switch (from) {
      case 'Parent':
        return this._http.get<Parent[]>('http://localhost:8090/DemoApi/Parent');
      case 'Admin':
        return this._http.get<Parent[]>('http://localhost:8090/DemoApi/Admin');
    }
  }

  /////////////////// delete user

  deleteUser(id, from) {
    this.delete(id, from).subscribe((data) => {
    },
      error => {
        console.log(error);
      })

  }
  delete(id, from) {

    switch (from) {
      case 'Parent':
        return this._http.get('http://localhost:8090/DemoApi/DeleteParent?id=' + id);
      case 'Admin':
        return this._http.get('http://localhost:8090/DemoApi/DeleteAdmin?id=' + id);
    }

  }


  /////////////////// add user


  addUser(data, from) {
    this.add(data, from).subscribe((data) => {
      data;
      return true;
    },
      error => {
        console.log(error);
      })

  }

  add(data, from) {
    switch (from) {
      case 'Admin':
        return this._http.get<Admin[]>('http://localhost:8090/DemoApi/AddAdmin', {
          observe: "body",
          params: data,
          responseType: "json"
        });
      case 'Parent':
        return this._http.get<Parent[]>('http://localhost:8090/DemoApi/AddParent', {
          observe: "body",
          params: data,
          responseType: "json"
        });
    }

  }

  /////////////////////// edit User
  editUser(data,from){
    this.edit(data, from).subscribe((data) => {
      data;
      return true;
    },
      error => {
        console.log(error);
      })
  }
  edit(data,from){
    switch (from) {
      case 'Admin':
        return this._http.get<Admin[]>('http://localhost:8090/DemoApi/EditAdmin', {
          observe: "body",
          params: data,
          responseType: "json"
        });
      case 'Parent':
        return this._http.get<Parent[]>('http://localhost:8090/DemoApi/EditParent', {
          observe: "body",
          params: data,
          responseType: "json"
        });
    }
  }

  /////////////////////////////////////////// get data by id

  
  getDataById(id,from) {
    switch (from) {
      case 'Parent':
        return this._http.get<any[]>('http://localhost:8090/DemoApi/GetParentById?id='+id);
      case 'Admin':
        return this._http.get<Parent[]>('http://localhost:8090/DemoApi/GetAdminById');
    }
  }
}
