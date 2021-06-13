import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GeneralManagerComponent } from "./general-manager.component";

const routes: Routes = [{
    path: '',
    component: GeneralManagerComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralManagerRoutingModule{

}