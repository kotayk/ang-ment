import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { CourseSearchComponent } from './pages/courses-list/course-search/course-search.component';
import {CoursesListModule} from './pages/courses-list/courses-list.module';


@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CoursesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
