import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserLoginComponent} from './user-login.component';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({selector: 'app-button', template: ''})
class ButtonComponent {
}

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserLoginComponent,
        ButtonComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have appropriate title', () => {
    const loginEl = fixture.debugElement.query(By.css('.user-login__title'));
    expect(loginEl.nativeElement.textContent.trim()).toEqual('User login');
  });
});
