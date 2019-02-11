import {Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, OnDestroy} from '@angular/core';
import {IBreadcrumb} from '../../interfaces/ibreadcrumb';
import {ICourse} from '../../interfaces/icourse';
import {CoursesService} from '../../common/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  breadcrumbsPath: IBreadcrumb[];
  courses: ICourse[];
  searchQuery: string;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.breadcrumbsPath = [
      {title: 'Courses', isClickable: false},
    ];
    this.courses = [];
    this.coursesService.getList().subscribe((courses) => {
      this.courses = courses;
    });
    this.searchQuery = '';
  }

  onSearchClick(query: string) {
    this.searchQuery = query;
  }

  onCourseDelete(course: ICourse) {
    if (confirm(`You sure yo delete course "${course.name}"?`)) {
      this.coursesService.removeItem(course.id);
      this.coursesService.getList().subscribe((courses) => {
        this.courses = courses;
      });
    }
  }

}
