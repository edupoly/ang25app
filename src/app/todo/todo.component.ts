import { JsonPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [JsonPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todo = input<any>();
  delTodo = output<void>();
  togTodo = output<void>();
  del() {
    this.delTodo.emit();
  }
  tog() {
    this.togTodo.emit();
  }
  ngOnChanges() {
    console.log('inside ngOnCHanges ' + this.todo().text + ' loaded');
  }
  ngOnInit() {
    console.log('onInit called');
  }
  ngOnDestroy() {
    console.log(this.todo().text + 'removed');
  }
}
