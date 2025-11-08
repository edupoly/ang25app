import { Component } from '@angular/core';
import { EcomService } from '../ecom.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public ecomService: EcomService) {}
  cartItems: any = [];
  ngOnInit() {
    this.cartItems = this.ecomService.cartItems;
    this.ecomService.cartSubject.subscribe((citems: any) => {
      console.log(citems);
      this.cartItems = citems;
    });
  }
  getTotal(): number {
    return this.cartItems.reduce((a: any, b: any) => {
      return a + b.count * b.price;
    }, 0);
  }
}
