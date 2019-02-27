import {Injectable} from '@angular/core';
import {IUser} from '../../interfaces/iuser';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as Auth from '../../actions/auth.actions';
import {select, Store} from '@ngrx/store';
import * as fromAuth from '../../reducers/auth.reducer';
import * as Courses from '../../actions/courses.actions';
import {ICourse} from '../../interfaces/icourse';
import * as fromCourses from '../../reducers/courses.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private store: Store<fromAuth.State>) {
  }

  login(user): Observable<any> {
    return this.http.post('http://localhost:3004/auth/login', {user} );
  }

  setToken(token) {
    localStorage.setItem('user', JSON.stringify(token));
  }

  logout() {
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return !!JSON.parse(localStorage.getItem('user'));
  }

  getToken() {
    const token = localStorage.getItem('user');
    if (token) {
      return JSON.parse(token);
    }
    return '';
  }

  getUserInfo(): Observable<any> {
    return this.http.post('http://localhost:3004/auth/userinfo', {});
  }

  dispatchLogin(payload) {
    this.store.dispatch(new Auth.Login(payload));
  }

  dispatchRedirect() {
    this.store.dispatch(new Auth.LoginRedirect());
  }

  dispatchLogout() {
    this.store.dispatch(new Auth.Logout());
  }

  dispatchGetUserData() {
    this.store.dispatch(new Auth.GetUserInfo());
  }

  connectUserDataToStore() {
    return this.store.pipe(select(fromAuth.getUserData));
  }

}
