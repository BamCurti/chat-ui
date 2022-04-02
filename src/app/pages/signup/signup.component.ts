//Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  showPassword: boolean = false
  form: FormGroup
  url: string = 'http://localhost:3000';

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService
    ) {

    this.form = formBuilder.group({
      'name': ['', Validators.required],
      'lastName': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email ]],
      'password': ['', [Validators.required, Validators.pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')) ]],
      'confirmPassword': ['', Validators.required],
      'terms': ['', Validators.requiredTrue]
    },
    {
      validators: [() => {
        return this.matchPasswords();
      }]
    })
  }

  ngOnInit(): void {}

  toogleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  sendData() {
    if(!this.form.valid) {
      alert('There is an error in the form.');
      return;
    }

    const form = this.form.getRawValue();

    this.authService.signup(form)
    .then(response => this.router.navigate(['/login']))
    .catch(error => alert(error.response.data.message));
  }

  matchPasswords() {
    if(!this.form) return;
    const { password, confirmPassword } = this.form.getRawValue();
    if(password === confirmPassword) return null;
    return { passwordMismatch: true }
  }

}
