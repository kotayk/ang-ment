import {Component, OnInit} from '@angular/core';
import {IBreadcrumb} from '../../interfaces/ibreadcrumb';
import {ICourse} from '../../interfaces/icourse';
import {CoursesService} from '../../common/services/courses.service';
import {select, Store} from '@ngrx/store';
import * as fromCourses from '../../reducers/courses.reducer';
import * as Courses from '../../actions/courses.actions';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  breadcrumbsPath: IBreadcrumb[];
  // courses: ICourse[];
  courses$: Observable<ICourse[]>
  searchQuery: string;
  page: number;
  PAGE_SIZE: number;
  moreAvailable: boolean;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.page = 0;
    this.PAGE_SIZE = 10;
    this.moreAvailable = true;
    this.breadcrumbsPath = [
      {title: 'Courses', isClickable: false},
    ];
    this.coursesService.dispatchGetList(this.getPage(this.page));
    this.courses$ = this.coursesService.connectCoursesToStore();
    this.searchQuery = '';
  }

  getPage(pageNumber) {
    return {
      start: pageNumber * this.PAGE_SIZE,
      count: this.PAGE_SIZE,
    };
  }

  onSearchClick(query: string) {
    this.searchQuery = query;
    this.page = 0;
    this.moreAvailable = true;
    this.coursesService.dispatchGetList(this.getPage(this.page), this.searchQuery);
  }

  onLoadMoreCourses() {
    this.page++;
    this.coursesService.getList(this.getPage(this.page), this.searchQuery).subscribe((response) => {
      this.coursesService.dispatchAddPage(response);
      if (!response.length) {
        this.moreAvailable = false;
      }
    });
  }

  onCourseDelete(course: ICourse) {
    if (confirm(`You sure yo delete course "${course.name}"?`)) {
      this.coursesService.removeItem(course.id).subscribe(() => {
        this.coursesService.dispatchGetList({start: 0, count: (this.page + 1) * this.PAGE_SIZE}, this.searchQuery);
      });
    }
  }

}
