import { Component, OnInit } from '@angular/core';
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
  courseID: string;
  breadcrumbsPath: IBreadcrumb[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.course = {} as ICourse;
    this.route.params.subscribe( params => {
      this.courseID = params['id'];
      if (this.courseID !== 'new') {
        this.course = this.coursesService.getItemById(this.courseID);
        this.breadcrumbsPath = [
          {
            title: 'Courses',
            isClickable: true,
            url: '/courses'
          },
          {
            title: this.course.title,
            isClickable: false,
          },
        ];
      } else {
        this.breadcrumbsPath = [
          {
            title: 'Courses',
            isClickable: true,
            url: '/courses'
          },
          {
            title: 'New course',
            isClickable: false,
          },
        ];
      }
    });


  }

  save() {
    this.router.navigate(['/courses/']);
  }

  cancel() {
    this.router.navigate(['/courses/']);
  }

}
