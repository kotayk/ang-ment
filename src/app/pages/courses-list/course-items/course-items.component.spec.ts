import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemsComponent} from './course-items.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import Courses from '../../../../mocks/courses';
import {ICourse} from '../../../interfaces/icourse';
// import {CourseItemComponent} from '../course-item/course-item.component';

@Component({
  //todo why do I need to put here "app-course-item" if I want to test its content
  template: `
    <app-course-items (deleteCourse)="onCourseDelete($event)" (loadMore)="onLoadMoreCourses()"></app-course-items>`
})
class TestHostComponent {
  courses: ICourse[];
  //todo what do I need to declare here?
}

/* test host testing example*/
describe('CourseItemsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemsComponent,
        TestHostComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    const courses = Courses;
    component.courses = courses;
    fixture.detectChanges();
  });

  it('should create', () => {
    //todo what do I test here
    expect(component).toBeTruthy();
  });

});
