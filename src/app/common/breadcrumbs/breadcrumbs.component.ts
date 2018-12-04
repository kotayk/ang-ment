import {Component, Input, OnInit} from '@angular/core';
import {IBreadcrumb} from '../../interfaces/ibreadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() path: IBreadcrumb[];

  constructor() { }

  ngOnInit() {
  }

}
