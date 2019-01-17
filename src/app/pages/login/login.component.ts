import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../common/services/auth.service';
import {IUser} from '../../interfaces/iuser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.user = {
      id: 1,
      firstName: 'Ilia',
      lastName: 'Fedorov',
    };
    this.router = router;
    this.authService = authService;
  }

  ngOnInit() {
  }

  onLoginClick() {
    this.authService.login(this.user);
    this.router.navigateByUrl('/course-list');
  }

}
