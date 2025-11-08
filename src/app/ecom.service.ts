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
    if (item.count === 1) {
      this.removeCartItem(item);
    }
    this.cartItems = this.cartItems.map((citem: any) => {
      if (citem.id === item.id) {
        citem.count--;
      }
      return citem;
    });
    this.cartSubject.next(this.cartItems);
  }
  getCartCount(item: any) {
    return this.cartItems.find((citem: any) => {
      return citem.id === item.id;
    })?.count;
  }
  removeCartItem(item: any) {
    this.cartItems = this.cartItems.filter((citem: any) => {
      return citem.id !== item.id;
    });
    this.cartSubject.next(this.cartItems);
  }
  isItemInCart(item: any) {
    return this.cartItems.find((citem: any) => {
      return citem.id === item.id;
    });
  }
}
