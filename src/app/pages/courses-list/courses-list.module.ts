import { NgModule } from '@angular/core';
import { CommonModule as ngCommon } from '@angular/common';
import {CoursesListComponent} from './courses-list.component';
import {CommonModule} from '../../common/common.module';
import {CourseSearchComponent} from './course-search/course-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoursesListComponent, CourseSearchComponent],
  imports: [
    ngCommon,
    CommonModule,
    FormsModule,
  ],
  exports: [CoursesListComponent]
})
export class CoursesListModule { }
