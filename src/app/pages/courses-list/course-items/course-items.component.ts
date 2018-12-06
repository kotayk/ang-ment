import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Courses from '../../../../mocks/courses';
import {ICourse} from '../../../interfaces/icourse';

@Component({
  selector: 'app-course-items',
  templateUrl: './course-items.component.html',
  styleUrls: ['./course-items.component.scss']
})
export class CourseItemsComponent implements OnInit {
  @Output() deleteCourse: EventEmitter<any> = new EventEmitter();
  @Output() loadMore: EventEmitter<any> = new EventEmitter();

  courses: ICourse[];

  constructor() { }

  ngOnInit() {
    this.courses = Courses;
  }

  onCourseDelete(course: ICourse) {
    this.deleteCourse.emit({course});
  }
  onLoadMoreClick() {
    this.loadMore.emit();
  }
}
