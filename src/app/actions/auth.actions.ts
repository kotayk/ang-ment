import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
  GetUserInfo = '[Auth] GetUserInfo',
  GetUserInfoSuccess = '[Auth] GetUserInfoSuccess',
  GetUserInfoFailure = '[Auth] GetUserInfoFailure',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class GetUserInfo implements Action {
  readonly type = AuthActionTypes.GetUserInfo;
}

export class GetUserInfoSuccess implements Action {
  readonly type = AuthActionTypes.GetUserInfoSuccess;

  constructor(public payload: any) {}
}

export class GetUserInfoFailure implements Action {
  readonly type = AuthActionTypes.GetUserInfoFailure;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout
  | GetUserInfo
  | GetUserInfoSuccess
  | GetUserInfoFailure;
