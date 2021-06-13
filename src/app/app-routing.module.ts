import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
    {
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => import("./system-modules/home/home.module").then(m => m.HomeModule)
    },
    {
        path: 'course',
        loadChildren: () => import("./system-modules/course/course.module").then(m => m.CourseModule)
    },
    {
        path: 'courseType',
        loadChildren: () => import("./system-modules/course-type/course-type.module").then(m => m.CourseTypeModule)
    },
    {
        path: 'courseAdministrator',
        loadChildren: () => import("./system-modules/course-administrator/course-administrator.module").then(m => m.CourseAdministratorModule)
    },
    {
        path: 'subjects',
        loadChildren: () => import("./system-modules/subjects/subjects.module").then(m => m.SubjectsModule)
    },
    {
        path: 'teacher',
        loadChildren: () => import("./system-modules/teacher/teacher.module").then(m => m.TeacherModule)
    },
    {
        path: 'generalManager',
        loadChildren: () => import("./system-modules/general-manager/general-manager.module").then(m => m.GeneralManagerModule)
    },
    {
        path: 'file',
        loadChildren: () => import("./system-modules/file/file.module").then(m => m.FileModule)
    },
    {
        path: 'teacher',
        loadChildren: () => import("./system-modules/teacher/teacher.module").then(m => m.TeacherModule)
    },
    {
        path: 'student',
        loadChildren: () => import("./system-modules/student/student.module").then(m => m.StudentModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash: true})],
    exports: [RouterModule]
  })
export class AppRoutingModule{

}