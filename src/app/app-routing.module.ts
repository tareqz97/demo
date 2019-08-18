import { NgModule } from '@angular/core';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule,Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [
  {
    path :'admin',
    component : AdminComponent
  },
  {
    path : 'home',
    component : DashbordComponent
   },
  // {
  //   path : '**',
  //   component : DashbordComponent
  // },
  {
    path : '',
    component : DashbordComponent
  },
  {
    path : 'teacher',
    component : TeacherComponent
  },
  {
    path : 'student',
    component : StudentComponent
  },
  {
    path : 'parent',
    component : ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
