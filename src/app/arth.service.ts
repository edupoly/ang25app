import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArthService {
  constructor() {}
  addNumbers(a = 0, b = 0, c = 0) {
    return +a + +b + +c;
  }
  subNumbers(a = 0, b = 0, c = 0) {
    return a - b - c;
  }
  mulNumbers(a = 1, b = 1, c = 1) {
    return a * b * c;
  }
}
