import { Component } from '@angular/core';
import { EcomService } from '../ecom.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public ecomService: EcomService) {}
  cart: any = [];
  cartLength = 0;
  ngOnInit() {
    this.ecomService.cart.subscribe((items: any) => {
      console.log('items::', items);
      this.cart = items;
      this.cartLength = items.length;
    });
  }
}
