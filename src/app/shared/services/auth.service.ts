import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged: boolean = false;

  user: User = {
    username: '',
    password: ''
  }

  constructor() { }

  login({username, password}: User): boolean {
    if (username == 'master8@lemoncode.net' && password == '12345678') {
      this.logged = true;
      this.user.username = username;
      this.user.password = password;
      localStorage.setItem('username',  username);
      return true;
    } else {
      return false;
    }
  };

  logout() {
    this.logged = false;
    localStorage.setItem('username', '');
  };

  isLogged() {
    return this.logged;
  };

  getUsername() {
    return this.user.username;
  };

}
