import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../shared/services/login.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.credentials)
    .then(response => {
      this.authService.save(response.token);
      console.log('Lol')
      this.router.navigate(['/users']);
    }).catch(err => {

    })
  }

}
