import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() t: string = '';
  @Output() delEvent = new EventEmitter();
  callDelEvent() {
    this.delEvent.emit();
  }
}
