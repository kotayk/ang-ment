import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemsComponent} from './course-items.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output} from '@angular/core';
import Courses from '../../../../mocks/courses';
import {ICourse} from '../../../interfaces/icourse';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <app-course-items [courses]="courses" (deleteCourse)="onCourseDelete($event)" (loadMore)="onLoadMoreCourses()"></app-course-items>`
})
class TestHostComponent {
  @Output() deleteCourse: EventEmitter<ICourse> = new EventEmitter();
  courses: ICourse[] = Courses;
  onCourseDelete() { }
}

/* test host testing example*/
describe('CourseItemsComponent', () => {
  let component: TestHostComponent;
  let courseItemsComponent: CourseItemsComponent;
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
    courseItemsComponent = fixture.debugElement.query(By.directive(CourseItemsComponent)).componentInstance;
    spyOn(courseItemsComponent.deleteCourse, 'emit').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Input() should contain proper courses', () => {
    expect(component.courses).toBe(Courses);
  });

  it('should call onCourseDelete Output() with proper param', () => {
    courseItemsComponent.onCourseDelete({
      id: 1,
      title: 'Video Course 1',
      creationDate: '05.28.2018',
      durationTime: '1h 28min',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores dolorum eius facere harum id laboriosam laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.',
    });
    expect(courseItemsComponent.deleteCourse.emit).toHaveBeenCalledWith({
      id: 1,
      title: 'Video Course 1',
      creationDate: '05.28.2018',
      durationTime: '1h 28min',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores dolorum eius facere harum id laboriosam laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.',
    });
  });

});
