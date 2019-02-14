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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {SpinnerInterceptor} from './interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    CoursesListModule,
    CourseAddModule,
    LoginModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
