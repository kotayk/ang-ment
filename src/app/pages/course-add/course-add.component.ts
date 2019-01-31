import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICourse} from '../../interfaces/icourse';
import {CoursesService} from '../../common/services/courses.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  course: ICourse|{};
  courseID: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.course = {};
    this.route.params.subscribe( params => {
      this.courseID = params['id'];
      if (this.courseID !== 'new') {
        this.course = this.coursesService.getItemById(this.courseID);
      }
    });


  }

  save() {
    console.log('saved');
  }

  cancel() {
    console.log('canceled');
  }

}
