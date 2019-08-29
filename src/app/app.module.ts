import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule,Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { TableComponent } from './table/table.component';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from '@angular/common/http'
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditModalComponent } from './edit-modal/edit-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashbordComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent,
    ParentComponent,
    TableComponent,
    DeleteModalComponent,
    AddModalComponent,
    EditModalComponent
  ],
  imports: [
    // RouterModule.forRoot(
    //   appRoutes,// <-- debugging purposes only
    // ),
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
