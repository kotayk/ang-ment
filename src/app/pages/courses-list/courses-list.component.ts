import {Component, OnInit} from '@angular/core';
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
    this.courses = [];
    this.coursesService.getList(this.getPage(this.page)).subscribe((courses) => {
      this.courses = courses;
    });
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
    this.coursesService.getList(this.getPage(this.page), this.searchQuery).subscribe((response) => {
      this.courses = response;
      if (!response.length) {
        this.moreAvailable = false;
      }
    });
  }

  onLoadMoreCourses() {
    this.page++;
    this.coursesService.getList(this.getPage(this.page), this.searchQuery).subscribe((response) => {
      this.courses = [...this.courses, ...response];
      if (!response.length) {
        this.moreAvailable = false;
      }
    });
  }

  onCourseDelete(course: ICourse) {
    if (confirm(`You sure yo delete course "${course.name}"?`)) {
      this.coursesService.removeItem(course.id).subscribe(() => {
        this.coursesService.getList({start: 0, count: (this.page + 1) * this.PAGE_SIZE}, this.searchQuery).subscribe((courses) => {
          this.courses = courses;
        });
      });
    }
  }

}
