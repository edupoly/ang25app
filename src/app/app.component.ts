import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodolistComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
  // newtodo = signal('');
  // updateNewTodo(ev: Event) {
  //   let value = (ev.target as HTMLInputElement).value;
  //   this.newtodo.set(value);
  // }
  // todos = signal([
  //   { id: 1, text: 'Learn Angular', completed: false },
  //   { id: 2, text: 'Build a todo app', completed: false },
  //   { id: 3, text: 'Read documentation', completed: true },
  //   { id: 4, text: 'Write unit tests', completed: true },
  //   { id: 5, text: 'Deploy the app', completed: false },
  // ]);
  // addTodo() {
  //   this.todos.update((cv) => {
  //     var ntd = {
  //       id: this.todos()[this.todos().length - 1]['id'] + 1,
  //       text: this.newtodo(),
  //       completed: false,
  //     };
  //     cv.push({ ...ntd });
  //     return cv;
  //   });
  // }
  // deleteTodo(id: number) {
  //   this.todos.update((cv) => {
  //     return cv.filter((t) => {
  //       if (t.id == id) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     });
  //   });
  // }
  // toggleTodo(id: number) {
  //   this.todos.update((cv) => {
  //     return cv.map((t) => {
  //       if (t.id == id) {
  //         t.completed = !t.completed;
  //       }
  //       return t;
  //     });
  //   });
  // }
  // doneTodo(id: number) {
  //   this.todos.update((cv) => {
  //     return cv.map((t) => {
  //       if (t.id == id) {
  //         t.completed = true;
  //       }
  //       return t;
  //     });
  //   });
  // }
  // undoTodo(id: number) {
  //   this.todos.update((cv) => {
  //     return cv.map((t) => {
  //       if (t.id == id) {
  //         t.completed = false;
  //       }
  //       return t;
  //     });
  //   });
  // }
}
