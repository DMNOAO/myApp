import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(8)],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{4}$')],
      ],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log("Redirigiendo...");
      const navigationExtras: NavigationExtras = {
        state: { username: this.username?.value },
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      console.log("Formulario inválido");
    }
  }
}  

