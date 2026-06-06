import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);
  constructor(public fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['rani', [Validators.required]],
      password: ['123', [Validators.required]],
    });
  }
  show() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      const { username, token } = res;
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('username', username);
      this.authService.user.next({ username, token });
      this.loginForm.reset();
      this.router.navigate(['/']);
      console.log(res);
    });
  }
}
