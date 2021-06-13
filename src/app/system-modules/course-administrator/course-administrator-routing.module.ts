import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseAdministratorComponent } from "./course-administrator.component";

const routes:Routes = [
    {
        path: '',
        component: CourseAdministratorComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseAdministratorRoutingModule{

}