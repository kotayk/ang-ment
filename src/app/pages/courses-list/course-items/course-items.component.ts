import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourse} from '../../../interfaces/icourse';

@Component({
  selector: 'app-course-items',
  templateUrl: './course-items.component.html',
  styleUrls: ['./course-items.component.scss']
})
export class CourseItemsComponent {
  @Output() deleteCourse: EventEmitter<ICourse> = new EventEmitter();
  @Output() loadMore: EventEmitter<void> = new EventEmitter();
  @Input() courses: ICourse[];

  constructor() { }

  onCourseDelete(course: ICourse) {
    this.deleteCourse.emit(course);
  }
  onLoadMoreClick() {
    this.loadMore.emit();
  }
}
