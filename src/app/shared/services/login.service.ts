import axios from 'axios';

import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = 'http://localhost:3000';


  constructor() {   }

  login(credentials: any) {
    return new Promise<any>((resolve, reject) => {
      axios.post(`${this.url}/api/login`, credentials)
      .then(response => resolve(response))
      .catch((err) => reject(err));
    })
  }

}
