import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourse} from '../../../interfaces/icourse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

  @Input() course: ICourse;
  @Output() deleteCourse: EventEmitter<ICourse> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {}

  onClickEdit(event: MouseEvent) {
    this.router.navigate(['/courses/', this.course.id]);
  }

  onClickDeleteCourse(event: MouseEvent) {
    this.deleteCourse.emit(this.course);
  }

}
