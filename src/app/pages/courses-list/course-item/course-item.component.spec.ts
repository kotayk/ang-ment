import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemComponent} from './course-item.component';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ICourse} from '../../../interfaces/icourse';

@Component({selector: 'app-button', template: ''})
class ButtonComponent {
}
/* stand alone testing example */
describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        ButtonComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    const courseItem = {
      id: 1,
      title: 'Video Course 1',
      creationDate: '05.28.2018',
      durationTime: '1h 28min',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Architecto asperiores dolorum eius facere harum id laboriosam
        laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.`,
    };
    component.course = courseItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Input() testing
  it('should show course title', () => {
    const title = fixture.debugElement.query(By.css('.course-item__title'));
    const nativeElTitle = title.nativeElement;
    expect(nativeElTitle.textContent).toContain(component.course.title);
  });

  // Output() testing
  it('should raise deleteCourse event when onClickDeleteCourse fired', () => {
    let clickedCourse: ICourse;
    component.deleteCourse.subscribe((course: ICourse) => clickedCourse = course);

    component.onClickDeleteCourse();
    expect(clickedCourse).toBe(component.course);
  });

});
