import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  @Input() userData: any;
  @Output() logoutClick: EventEmitter<any> = new EventEmitter();
  isAuthenticated: boolean;

  constructor() { }

  ngOnInit() {}



  onLogoutClick() {
    this.logoutClick.emit();
  }

}
