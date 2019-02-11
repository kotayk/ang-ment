import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit, OnChanges {
  @Input() userData: any;
  @Output() logoutClick: EventEmitter<any> = new EventEmitter();
  firstName: string;
  lastName: string;
  isAuthenticated: boolean;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(change) {
    if (change.userData && Object.keys(change.userData.currentValue).length) {
      this.firstName = change.userData.currentValue.name.first;
      this.lastName = change.userData.currentValue.name.last;
      this.isAuthenticated = true;
    }
  }

  onLogoutClick() {
    this.logoutClick.emit();
  }

}
