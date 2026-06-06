import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  public userDetails: any = null;
  public user = new BehaviorSubject<any>(null);
  constructor() {
    const username = window.localStorage.getItem('username');
    const token = window.localStorage.getItem('token');
    if (username) {
      this.user.next({ username, token });
    }
    this.user.subscribe((res) => {
      this.userDetails = res;
    });
  }
  login(user: any) {
    return this.http.post('http://localhost:3500/auth/login', user);
  }
}
