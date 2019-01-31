import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesListComponent} from './pages/courses-list/courses-list.component';
import {LoginComponent} from './pages/login/login.component';
import {BaseLayoutComponent} from './pages/base-layout/base-layout.component';
import {CourseAddComponent} from './pages/course-add/course-add.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {path: 'courses', component: CoursesListComponent},
      {path: 'courses/:id', component: CourseAddComponent},
      {path: 'courses/new', component: CourseAddComponent},
    ]
  },
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
