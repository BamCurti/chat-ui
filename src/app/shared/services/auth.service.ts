import axios from 'axios';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'http://localhost:3000';
  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loginStatus.next(this.isLoggedIn());
   }

  save(token: string) {
    localStorage.setItem('token', token);
    this.loginStatus.next(true);
  }

  getItem() {
    return sessionStorage.getItem('token') || '';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  remove() {
    this.loginStatus.next(false);
    return localStorage.removeItem('token');
  }

  signup(form: any) {
    return new Promise<any>((resolve, reject) => {
      axios.post(`${this.url}/api/users`, {
        name: form.name,
        lastName: form.lastName,
        password: form.password,
        email: form.email
      }).then(response => resolve(response))
      .catch(error => reject(error));
    })



  }

}
