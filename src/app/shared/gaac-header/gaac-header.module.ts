import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GaacHeaderComponent } from "./gaac-header.component";

@NgModule ({
    declarations: [ GaacHeaderComponent ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ GaacHeaderComponent ] 
})
export class GaacHeaderModule {

}