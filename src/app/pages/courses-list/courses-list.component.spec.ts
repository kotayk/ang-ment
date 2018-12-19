import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesListComponent} from './courses-list.component';
import {Component, Input} from '@angular/core';
import {IBreadcrumb} from '../../interfaces/ibreadcrumb';
import {ICourse} from '../../interfaces/icourse';

@Component({selector: 'app-breadcrumbs', template: ''})
class BreadcrumbsComponent {
  @Input() path: IBreadcrumb[];
}

@Component({selector: 'app-course-search', template: ''})
class CourseSearchComponent {
}

@Component({selector: 'app-course-items', template: ''})
class CourseItemsComponent {
  @Input() courses: ICourse[];
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let course: ICourse;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        BreadcrumbsComponent,
        CourseSearchComponent,
        CourseItemsComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.breadcrumbsPath = [
      {title: 'Courses', isClickable: false},
    ];
    course = { id: 1, description: '', creationDate : '', durationTime: '', title: ''};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onCourseDelete should return course.id', () => {
    expect(component.onCourseDelete(course)).toBe(course.id);
  });

});
