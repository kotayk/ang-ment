import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICourse} from '../../interfaces/icourse';
import {CoursesService} from '../../common/services/courses.service';
import {IBreadcrumb} from '../../interfaces/ibreadcrumb';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  course: ICourse;
  courseCreation: boolean;
  breadcrumbsPath: IBreadcrumb[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courseCreation = true;
    this.route.data
      .subscribe((data: { course: ICourse }) => {
        this.course = data.course ? data.course : {} as ICourse;
        this.courseCreation = !data.course;
        this.breadcrumbsPath = this.initializeBreadcrumbs();
      });
  }

  initializeBreadcrumbs() {
    const breadcrumbs: IBreadcrumb[] = [
      {
        title: 'Courses',
        isClickable: true,
        url: '/courses'
      }
    ];
    if (!this.courseCreation) {
      breadcrumbs.push({
        title: this.course.name,
        isClickable: false,
      });
    } else {
      breadcrumbs.push({
        title: 'New course',
        isClickable: false,
      });
    }

    return breadcrumbs;
  }

  save() {
    if (this.courseCreation) {
      this.coursesService.createCourse(this.course).subscribe(() => {
        this.router.navigate(['/courses/']);
      });
    } else {
      this.coursesService.updateItem(this.course).subscribe(() => {
        this.router.navigate(['/courses/']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/courses/']);
  }

}
