import {Injectable} from '@angular/core';
import {IUser} from '../../interfaces/iuser';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
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

}
