import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesListComponent} from './pages/courses-list/courses-list.component';

const routes: Routes = [
  {path: 'courses-list', component: CoursesListComponent},
  {path: '', redirectTo: '/courses-list', pathMatch: 'full'},
  {path: '**', redirectTo: '/courses-list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
