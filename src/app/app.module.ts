import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from './common/common.module';
import {CoursesListModule} from './pages/courses-list/courses-list.module';
import {LoginModule} from './pages/login/login.module';
import {BaseLayoutComponent} from './pages/base-layout/base-layout.component';
import {CourseAddModule} from './pages/course-add/course-add.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CoursesListModule,
    CourseAddModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
