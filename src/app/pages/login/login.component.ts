import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../common/services/auth.service';
import {IUser} from '../../interfaces/iuser';
import {ActivatedRoute, Router} from '@angular/router';
import * as fromAuth from '../../reducers/auth.reducer';
import * as Auth from '../../actions/auth.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  onLoginClick() {
    this.authService.dispatchLogin({login: this.login, password: this.password})
  }

}
