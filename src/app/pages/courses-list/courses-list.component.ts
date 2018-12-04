import {Component, OnInit} from '@angular/core';
import {IBreadcrumb} from '../../interfaces/ibreadcrumb';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  breadcrumbsPath: IBreadcrumb[];

  constructor() {
  }

  ngOnInit() {
    this.breadcrumbsPath = [
      {title: 'Courses', isClickable: false},
    ];
  }

}
