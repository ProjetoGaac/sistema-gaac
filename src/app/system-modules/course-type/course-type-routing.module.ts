import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseTypeComponent } from "./course-type.component";

const routes: Routes = [{
    path: '',
    component: CourseTypeComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseTypeRoutingModule{

}