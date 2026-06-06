import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [NgForOf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todoService = inject(TodoService);
  constructor() {}
  todos: any = null;
  newTodo = signal('');
  ngOnInit() {
    this.todoService.getUserTodos().subscribe((res) => {
      this.todos = res;
      console.log(this.todos);
    });
  }
  updateNewTodo(ev: Event) {
    let iv = (ev.target as HTMLInputElement).value;
    this.newTodo.set(iv);
  }
  addTodo() {
    this.todoService.addTodo(this.newTodo()).subscribe((res) => {
      console.log(res);
    });
    console.log(this.newTodo());
  }
}
