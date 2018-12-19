import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemsComponent} from './course-items.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, EventEmitter, Input, Output} from '@angular/core';
import Courses from '../../../../mocks/courses';
import {ICourse} from '../../../interfaces/icourse';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <app-course-items [courses]="courses" (deleteCourse)="testHostOnCourseDelete($event)" (loadMore)="onLoadMoreCourses()"></app-course-items>`
})
class TestHostComponent {
  courses: ICourse[] = Courses;
  testHostOnCourseDelete() { }
}

@Component({selector: 'app-course-item', template: ''})
class CourseItemComponent {
  @Input() course: ICourse;
  @Output() deleteCourse: EventEmitter<ICourse> = new EventEmitter();
}

/* test host testing example*/
describe('CourseItemsComponent', () => {
  let component: TestHostComponent;
  let courseItemsComponent: CourseItemsComponent;
  let courseItemComponent: CourseItemComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let componentCourseItemsFixture: ComponentFixture<CourseItemsComponent>;
  let componentCourseItems: CourseItemsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemsComponent,
        CourseItemComponent,
        TestHostComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    // to test as host
    component = fixture.componentInstance;
    // to test component as himself
    componentCourseItemsFixture = TestBed.createComponent(CourseItemsComponent);

    courseItemsComponent = fixture.debugElement.query(By.directive(CourseItemsComponent)).componentInstance;
    componentCourseItems = componentCourseItemsFixture.componentInstance;
    componentCourseItems.courses = Courses;

    spyOn(componentCourseItems, 'onCourseDelete').and.callThrough();
    spyOn(componentCourseItems.deleteCourse, 'emit').and.callThrough();
    spyOn(component, 'testHostOnCourseDelete').and.callThrough();
    fixture.detectChanges();
    componentCourseItemsFixture.detectChanges();
  });

  // 1. to test component as himself
  it('children amount should be correct', () => {
    const courseItems = componentCourseItemsFixture.debugElement.queryAll(By.directive(CourseItemComponent));
    expect(courseItems.length).toEqual(Courses.length);
  });

  it('should get a correct course item from Input and bring it to Output', () => {
    const courseItem = componentCourseItemsFixture.debugElement.queryAll(By.directive(CourseItemComponent))[0];
    courseItemComponent = courseItem.componentInstance;
    courseItemComponent.deleteCourse.emit(courseItemComponent.course);
    const expectedCourse = courseItemComponent.course;
    expect(componentCourseItems.onCourseDelete).toHaveBeenCalledWith(expectedCourse);
    expect(componentCourseItems.deleteCourse.emit).toHaveBeenCalledWith(expectedCourse);
  });

  // 2. to test component Input/Output with test-host approach
  it('Input() should contain correct courses', () => {
    expect(courseItemsComponent.courses).toBe(Courses);
  });

  it('output', () => {
    const expectedCourse = courseItemsComponent.courses[0];
    courseItemsComponent.onCourseDelete(expectedCourse);
    expect(component.testHostOnCourseDelete).toHaveBeenCalledWith(expectedCourse);
  });

});
