import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICourse} from '../../interfaces/icourse';
import {CoursesService} from '../../common/services/courses.service';
import {IBreadcrumb} from '../../interfaces/ibreadcrumb';
import {Store} from '@ngrx/store';
import * as fromCourses from '../../reducers/courses.reducer';
import * as Courses from '../../actions/courses.actions';
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, ValidatorFn, Validators} from '@angular/forms';
import {log} from 'util';
import {merge} from 'rxjs';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  course: ICourse;
  courseCreation: boolean;
  breadcrumbsPath: IBreadcrumb[];
  courseAddEdit: FormGroup;
  @ViewChild('courseAddEditForm') courseAddEditForm: FormGroupDirective;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courseCreation = true;
    this.courseAddEdit = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      description: new FormControl('', [
          Validators.required,
          Validators.maxLength(500)
        ]),
      date: new FormControl('', [
        Validators.required,
        this.regexpValidator(/(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/)
      ]),
      durationTime: new FormControl('', [
        Validators.required,
        this.regexpValidator(/^\d*$/)
      ]),
    });
    this.route.data
      .subscribe((data: { course: ICourse }) => {
        this.course = data.course ? data.course : {} as ICourse;
        this.courseCreation = !data.course;
        this.courseAddEdit.patchValue(this.course);
        this.breadcrumbsPath = this.initializeBreadcrumbs();
      });
  }

  get f() { return this.courseAddEdit.controls; }

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
    this.courseAddEditForm.ngSubmit.emit();
  }

  onFormSubmit() {
    this.course = Object.assign(this.course, this.courseAddEdit.value);
    console.log(this.course);
    if (this.courseCreation) {
      this.coursesService.dispatchCreateEditCourse(this.course, true);
    } else {
      this.coursesService.dispatchCreateEditCourse(this.course, false);
    }
  }

  cancel() {
    this.router.navigate(['/courses/']);
  }

  regexpValidator(re: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const dateError = re.test(control.value);
      return dateError ? null : {'regexpError': {value: control.value}};
    };
  }

}
