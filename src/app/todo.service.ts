import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  authService = inject(AuthService);
  constructor() {}
  getUserTodos() {
    console.log(this.authService.userDetails);
    return this.http.get(`http://localhost:3500/todos/`, {
      headers: {
        token: this.authService.userDetails.token,
      },
    });
  }
  addTodo(todo: any) {
    return this.http.post(
      'http://localhost:3500/todos/',
      { title: todo },
      {
        headers: {
          token: this.authService.userDetails.token,
        },
      },
    );
  }
}
