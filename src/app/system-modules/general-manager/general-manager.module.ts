import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralManagerRoutingModule } from './general-manager-routing.module';
import { GeneralManagerComponent } from './general-manager.component';



@NgModule({
  declarations: [GeneralManagerComponent],
  imports: [
    CommonModule,
    GeneralManagerRoutingModule
  ]
})
export class GeneralManagerModule { }
