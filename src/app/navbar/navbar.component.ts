import { Component, inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [LoginComponent, RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  authService = inject(AuthService);
  user: any = null;
  router = inject(Router);
  constructor() {}
  ngOnInit() {
    this.user = this.authService.user;

    this.authService.user.subscribe((res) => {
      this.user = res;
    });
  }
  logout() {
    this.authService.user.next(null);

    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
