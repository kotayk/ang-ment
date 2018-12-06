import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { CoursesListModule } from './pages/courses-list/courses-list.module';
import { RouterModule, Routes } from '@angular/router';
import {CoursesListComponent} from './pages/courses-list/courses-list.component';


const appRoutes: Routes = [
  { path: 'courses-list', component: CoursesListComponent },
  { path: '',   redirectTo: '/courses-list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CoursesListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
