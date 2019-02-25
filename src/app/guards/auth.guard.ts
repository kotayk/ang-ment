import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../common/services/auth.service';
import {Store} from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import * as Auth from '../actions/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return Observable.create((observer) => {
      const isAuth = this.authService.isAuthenticated();
      if (isAuth) {
        observer.next(isAuth);
      } else {
        this.authService.dispatchRedirect();
      }
      observer.complete();
    });
  }
}
