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
    item.count = 1;
    this.cartItems.push(item);
    console.log(this.cartItems);
    this.cartSubject.next(this.cartItems);
  }
  isItemInCart(item: any) {
    return this.cartItems.find((citem: any) => citem.id === item.id);
  }
  incCartItemCount(item: any) {
    this.cartItems = this.cartItems.map((citem: any) => {
      if (citem.id === item.id) {
        citem.count++;
      }
      return citem;
    });
    this.cartSubject.next(this.cartItems);
  }
  decCartItemCount(item: any) {
    if (item.count == 1) {
      this.cartItems = this.cartItems.filter((citem: any) =>
        citem.id !== item.id ? true : false
      );
    } else {
      this.cartItems = this.cartItems.map((citem: any) => {
        if (citem.id === item.id) {
          citem.count--;
        }
        return citem;
      });
    }
    this.cartSubject.next(this.cartItems);
  }
  removeCartItem(item: any) {
    this.cartItems = this.cartItems.filter((citem: any) =>
      citem.id !== item.id ? true : false
    );
    this.cartSubject.next(this.cartItems);
  }
  getCartTotal() {
    return this.cartItems.reduce((a: any, b: any) => {
      return a + b.count * b.price;
    }, 0);
  }
}
