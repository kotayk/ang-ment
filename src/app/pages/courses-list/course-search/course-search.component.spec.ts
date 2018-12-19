import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseSearchComponent} from './course-search.component';
import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({selector: 'app-button', template: ''})
class ButtonComponent {
}

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        CourseSearchComponent,
        ButtonComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update searchQuery according to user input', async() => {
    const testString = 'test';
    const searchInput = fixture.debugElement.query(By.css('.course-search__input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      searchInput.nativeElement.value = testString;
      searchInput.nativeElement.dispatchEvent(new Event('input'));
      expect(component.searchQuery).toEqual(testString);
    });

  });
});
