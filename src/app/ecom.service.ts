import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EcomService {
  cartItems: any = [];
  cartSubject = new Subject();
  constructor() {}
  addItemToCart(item: any) {
    this.cartItems.push(item);
    console.log(this.cartItems);
    this.cartSubject.next(this.cartItems);
  }
}
