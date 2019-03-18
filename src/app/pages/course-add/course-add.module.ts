import {NgModule} from '@angular/core';
import {CommonModule as ngCommon} from '@angular/common';
import {CourseAddComponent} from './course-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from 'src/app/common/common.module';

@NgModule({
  declarations: [CourseAddComponent],
  imports: [
    ngCommon,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CourseAddModule {
}
