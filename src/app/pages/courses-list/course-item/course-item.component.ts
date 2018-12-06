import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourse} from '../../../interfaces/icourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: ICourse;
  @Output() deleteCourse: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickDeleteCourse() {
    this.deleteCourse.emit();
  }

}
