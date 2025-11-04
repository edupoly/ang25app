import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EcomService {
  cart = new Subject();
  cartItems: any = [];
  addToCart(product: any) {
    this.cartItems.push(product);
    this.cart.next(this.cartItems);
  }
  constructor() {}
}
