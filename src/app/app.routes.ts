import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
];
