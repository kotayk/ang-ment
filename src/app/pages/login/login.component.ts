import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../common/services/auth.service';
import {IUser} from '../../interfaces/iuser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  onLoginClick() {
    this.authService.login({login: this.login, password: this.password})
      .subscribe((response) => {
        this.authService.setToken(response.token);
        this.router.navigateByUrl('/courses');
      });
  }

}
