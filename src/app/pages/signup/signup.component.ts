import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  showPassword: boolean = false
  form: FormGroup

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'fullName': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email ]],
      'password': ['', [Validators.required, Validators.minLength(8) ]],
      'confirmPassword': ['', Validators.required]
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
    if(this.form.valid) console.log('Se arma compa');
    else console.log('Inga su mare')
  }

  matchPasswords() {
    if(!this.form) return;
    const { password, confirmPassword } = this.form.getRawValue();
    if(password === confirmPassword) return null;
    return { passwordMismatch: true }

  }

}
