import {Injectable} from '@angular/core';
import {IUser} from '../../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser;

  constructor() {
  }

  login(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return !!JSON.parse(localStorage.getItem('user'));
  }

  getUserInfo() {
    return {
      isAuthenticated: this.isAuthenticated(),
      user: JSON.parse(localStorage.getItem('user'))
    };
  }
}
