import {Directive, ElementRef, Host, OnInit} from '@angular/core';
import {CourseItemComponent} from '../../pages/courses-list/course-item/course-item.component';

@Directive({
  selector: '[appFreshCourse]'
})
export class FreshCourseDirective implements OnInit {
  private element: ElementRef;
  private hostComponent: CourseItemComponent;
  private courseDate: number;
  private delta: number;
  private now: number;
  private color: string;
  private colors: object;

  constructor(Element: ElementRef, @Host() hostComponent: CourseItemComponent) {
    this.element = Element;
    this.hostComponent = hostComponent;
    this.delta = 7 * 24 * 60 * 60 * 1000 * 2;
    this.colors = {
      fresh: 'green',
      upcoming: 'blue',
      none: ''
    };
  }

  ngOnInit() {
    this.courseDate = new Date(this.hostComponent.course.creationDate).getTime();
    this.now = new Date().getTime();
    this.color = this.setColor();
    if (this.color) {
      this.element.nativeElement.querySelector('.course-item').style.borderColor = this.colors[this.color];
    }
  }

  setColor(): any {
    if (this.now > this.courseDate) {
      if (this.courseDate >= this.now - this.delta) {
        return 'fresh';
      }
    } else {
      return 'upcoming';
    }
    return false;
  }

}
