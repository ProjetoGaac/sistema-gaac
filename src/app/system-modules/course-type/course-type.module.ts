import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTypeComponent } from './course-type.component';
import { CourseTypeRoutingModule } from './course-type-routing.module';



@NgModule({
  declarations: [
    CourseTypeComponent
  ],
  imports: [
    CommonModule,
    CourseTypeRoutingModule
  ]
})
export class CourseTypeModule { }
