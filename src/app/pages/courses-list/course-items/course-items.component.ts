import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ICourse} from '../../../interfaces/icourse';
import {SearchCoursePipe} from '../../../common/pipes/search-course.pipe';

@Component({
  selector: 'app-course-items',
  templateUrl: './course-items.component.html',
  styleUrls: ['./course-items.component.scss']
})
export class CourseItemsComponent implements OnChanges {
  @Output() deleteCourse: EventEmitter<ICourse> = new EventEmitter();
  @Output() loadMore: EventEmitter<void> = new EventEmitter();
  @Input() courses: ICourse[];
  @Input() searchQuery: string;
  courseList: ICourse[];

  constructor() {
    this.courseList = this.courses;
  }

  ngOnChanges(changes) {
    if (changes.searchQuery) {
      this.courseList = new SearchCoursePipe().transform(this.courses, changes.searchQuery.currentValue);
    }
    if (changes.courses) {
      this.courseList = changes.courses.currentValue;
    }
  }

  onCourseDelete(course: ICourse) {
    this.deleteCourse.emit(course);
  }
  onLoadMoreClick() {
    this.loadMore.emit();
  }
}
