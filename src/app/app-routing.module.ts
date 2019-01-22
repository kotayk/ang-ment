import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesListComponent} from './pages/courses-list/courses-list.component';
import {LoginComponent} from './pages/login/login.component';
import {BaseLayoutComponent} from './pages/base-layout/base-layout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {path: 'courses-list', component: CoursesListComponent},
    ]
  },
  {path: '', redirectTo: '/courses-list', pathMatch: 'full'},
  {path: '**', redirectTo: '/courses-list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
