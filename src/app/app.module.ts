import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseSearchComponent } from './courses-list/course-search/course-search.component';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
