import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArthService } from '../arth.service';

@Component({
  selector: 'app-simple',
  imports: [FormsModule],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css',
})
export class SimpleComponent {
  n1 = 10;
  n2 = 20;
  res = 0;
  // DI
  // constructor(public arthService: ArthService) {}
  public aS = inject(ArthService);
  add() {
    this.res = this.aS.addNumbers(this.n1, this.n2);
  }
  sub() {
    this.res = this.aS.subNumbers(this.n1, this.n2);
  }
  mul() {}
}
