import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule, TodoComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  todos: string[] = [
    'Buy groceries',
    'Walk the dog',
    'Read a book',
    'Write some code',
    'Call a friend',
    'Exercise for 30 minutes',
    "Plan tomorrow's schedule",
    'Clean the kitchen',
  ];
  newtodo = '';
  addTodo() {
    this.todos.push(this.newtodo);
  }
  deleteTodo(i: number) {
    this.todos.splice(i, 1);
  }
}
