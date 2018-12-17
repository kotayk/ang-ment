import {Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, OnDestroy} from '@angular/core';
import {IBreadcrumb} from '../../interfaces/ibreadcrumb';
import {ICourse} from '../../interfaces/icourse';
import Courses from '../../../mocks/courses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked, AfterContentChecked,
  OnDestroy {

  breadcrumbsPath: IBreadcrumb[];
  courses: ICourse[];

  constructor() {
  }

  ngOnInit() {
    console.log('on init')
    this.breadcrumbsPath = [
      {title: 'Courses', isClickable: false},
    ];
    this.courses = Courses;
  }

  onCourseDelete(course: ICourse) {
    console.log(`course number ${course.id} deleted`);
    return course.id;
  }

  onLoadMoreCourses() {
    console.log('load more courses');
  }

  ngOnChanges() {
    console.log('on changes');
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterContentChecked() {
    console.log('after content checked');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterViewChecked() {
    console.log('after view checked');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }

}
