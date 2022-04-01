import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../shared/services/login.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
//import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: any = {
    email:'',
    password:'',
  };

  private secret = 'tu2yhFkeMc^EXYQ4E@gFy%y0%7';

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
  ) {   }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.credentials)
    .then(response => {
      console.log(response)
      this.authService.save(response.data.token);
      this.router.navigate(['/users']);
    }).catch(err => {
      alert(err)
    })
  }

}
