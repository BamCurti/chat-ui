import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credentials: any) {
    return new Promise<any>((resolve, reject) => {
      resolve({
        token: credentials
      });
    })
  }

}
