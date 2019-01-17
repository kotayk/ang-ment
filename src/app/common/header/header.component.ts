import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData: object;
  isLoginPage: boolean;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.authService = authService;
  }

  ngOnInit() {
    this.userData = this.authService.getUserInfo();

    // console.log(this.router.url)
    // this.isLoginPage = (this.router.url === '/login');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
