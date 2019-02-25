import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {tap, map, exhaustMap, catchError, mergeMap, filter, take} from 'rxjs/operators';
import {AuthService} from '../common/services/auth.service';
import {of} from 'rxjs';

import {
  Login,
  LoginSuccess,
  LoginFailure,
  AuthActionTypes, GetUserInfoSuccess, GetUserInfoFailure,
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    exhaustMap((auth: object) =>
      this.authService
        .login(auth)
        .pipe(
          map(response => new LoginSuccess(response)),
          catchError(error => of(new LoginFailure(error)))
        )
    )
  );

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    map((action: LoginSuccess) => action.payload.token),
    tap((token) => {
      this.authService.setToken(token);
      this.router.navigateByUrl('/courses');
    })
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    tap(() => {
      this.authService.logout();
      this.router.navigateByUrl('/login');
    })
  );

  @Effect({dispatch: false})
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect),
    tap(() => {
      this.router.navigate(['/login']);
    })
  );

  @Effect()
  getUserInfo$ = this.actions$.pipe(
    ofType(AuthActionTypes.GetUserInfo),
    exhaustMap(() =>
      this.authService.getUserInfo()
        .pipe(
          map(response => new GetUserInfoSuccess(response)),
          catchError(error => of(new GetUserInfoFailure()))
        )
    )
  );

  @Effect({dispatch: false})
  getUserInfoFailure$ = this.actions$.pipe(
    ofType(AuthActionTypes.GetUserInfoFailure),
    tap(() => {
      this.router.navigate(['/login']);
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {
  }
}
