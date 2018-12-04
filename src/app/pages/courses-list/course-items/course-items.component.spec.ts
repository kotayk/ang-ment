import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemsComponent } from './course-items.component';

describe('CourseItemsComponent', () => {
  let component: CourseItemsComponent;
  let fixture: ComponentFixture<CourseItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
