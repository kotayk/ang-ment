import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as Auth from '../../actions/auth.actions';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../reducers/auth.reducer';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() hideLogin: boolean;
  userData$: object;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.userData$ = this.authService.getUserInfo().pipe(
      catchError(err => {
        this.authService.dispatchRedirect();
        return throwError(err);
      })
    );
  }

  logout() {
    this.authService.dispatchLogout();
  }

}
