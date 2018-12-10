import { NgModule } from '@angular/core';
import { CommonModule as ngCommon } from '@angular/common';
import {CoursesListComponent} from './courses-list.component';
import {CommonModule} from '../../common/common.module';
import {CourseSearchComponent} from './course-search/course-search.component';
import { FormsModule } from '@angular/forms';
import { CourseItemsComponent } from './course-items/course-items.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [CoursesListComponent, CourseSearchComponent, CourseItemsComponent, CourseItemComponent],
  imports: [
    ngCommon,
    CommonModule,
    FormsModule,
  ],
  exports: [CoursesListComponent]
})
export class CoursesListModule { }
