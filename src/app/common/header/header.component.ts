import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() hideLogin: boolean;
  userData: object;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.userData = {};
    this.authService.getUserInfo()
      .subscribe((response) => {
          this.userData = response;
        });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
