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
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private authService: AuthService,
  ) {
    this.registrationForm = this.fb.group({
      name: ['praveen', [Validators.required, Validators.minLength(3)]],
      email: ['praveen@gmail.com', [Validators.required, Validators.email]],
      password: ['abc@123', [Validators.required, Validators.minLength(6)]],
      role: ['Farmer', [Validators.required]],
      address: this.fb.group({
        area: ['pedapatnam', [Validators.required]],
        district: ['konaseema', [Validators.required]],
        state: ['andhrapradesh', [Validators.required]],
      }),
      pincode: ['500000', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      this.authService.registerUser(this.registrationForm.value).subscribe({
        next: (res) => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed', err);
        },
      });
    }
  }
}
