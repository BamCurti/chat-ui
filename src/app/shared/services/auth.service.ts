import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  save(token: string) {
    localStorage.setItem('token', token);
  }

  getItem() {
    return sessionStorage.getItem('token') || '';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  remove() {
    return localStorage.removeItem('token');
  }

}
