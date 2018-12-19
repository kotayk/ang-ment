import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import {By} from '@angular/platform-browser';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    component.path = [
      {title: 'Courses', isClickable: false},
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have appropriate breadcrumbs view', () => {
    const breadcrumbItems = fixture.debugElement.queryAll(By.css('.breadcrumbs__item'));
    expect(breadcrumbItems.length).toEqual(1);
    expect(breadcrumbItems[0].nativeElement.textContent.trim()).toEqual('Courses');
    expect(breadcrumbItems[0].nativeElement.classList.contains('breadcrumbs__link_clickable')).toBeFalsy();
  });
});
