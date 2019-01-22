import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../interfaces/iuser';
import {ICourse} from '../../interfaces/icourse';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  @Input() userData: {isAuthenticated, user};
  @Output() logoutClick: EventEmitter<any> = new EventEmitter();
  user: IUser;
  isAuthenticated: boolean;

  constructor() { }

  ngOnInit() {
    this.user = this.userData.user;
    this.isAuthenticated = this.userData.isAuthenticated;
  }

  onLogoutClick() {
    this.logoutClick.emit();
  }

}
