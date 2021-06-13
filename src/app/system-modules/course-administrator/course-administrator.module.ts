import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseAdministratorComponent } from './course-administrator.component';
import { CourseAdministratorRoutingModule } from './course-administrator-routing.module';



@NgModule({
  declarations: [
    CourseAdministratorComponent
  ],
  imports: [
    CommonModule,
    CourseAdministratorRoutingModule
  ]
})
export class CourseAdministratorModule { }
