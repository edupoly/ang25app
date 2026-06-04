import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['@gmail.com', [Validators.required, Validators.email]],
      password: ['abc@123', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.authService.loginUser(this.loginForm.value).subscribe({
        next: (res) => {
          alert('Login ipoindi');
          window.localStorage.setItem('token', res.token);
          window.localStorage.setItem('role', res.role);
          window.localStorage.setItem('name', res.name);
          if (res.role === 'Farmer') {
            this.router.navigate(['/farmer']);
          }
          if (res.role === 'Buyer') {
            this.router.navigate(['/buyer']);
          }
        },
        error: (err) => {
          console.error('Registration failed', err);
        },
      });
    }
  }
}
