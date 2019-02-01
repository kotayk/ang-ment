import {Component, Input, OnInit} from '@angular/core';
import {IBreadcrumb} from '../../interfaces/ibreadcrumb';
import {Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() path: IBreadcrumb[];

  constructor(private router: Router) { }

  onItemClick(item: IBreadcrumb) {
    this.router.navigateByUrl(item.url);
  }

  ngOnInit() {
  }

}
