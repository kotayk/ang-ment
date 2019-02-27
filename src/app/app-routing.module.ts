import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesListComponent} from './pages/courses-list/courses-list.component';
import {LoginComponent} from './pages/login/login.component';
import {BaseLayoutComponent} from './pages/base-layout/base-layout.component';
import {CourseAddComponent} from './pages/course-add/course-add.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard';
import {CourseDetailsResolverService} from './pages/course-add/course-details-resolver.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: BaseLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'courses', component: CoursesListComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {
        path: 'courses/new',
        component: CourseAddComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'courses/:id',
        component: CourseAddComponent,
        resolve: {
          course: CourseDetailsResolverService
        },
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {path: '', redirectTo: '/courses', pathMatch: 'full'},
    ]
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
