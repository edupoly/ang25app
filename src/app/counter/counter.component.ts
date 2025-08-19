import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input() iv: any;
  @Input() step: any;
  count = 0;
  constructor() {}
  ngOnInit() {
    this.count = this.iv;
  }
  inc() {
    this.count = this.count + this.step;
  }
  dec() {
    this.count == this.count - this.step;
  }
}
