import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { SubjectRoutingModule } from './subject-routing.module';



@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectsModule { }
