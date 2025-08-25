import { Component, signal } from '@angular/core';
import { products } from '../products.json';
import { CartComponent } from '../cart/cart.component';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-pos',
  imports: [CartComponent, JsonPipe],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css',
})
export class PosComponent {
  allProducts = signal(products);
  cartProducts: any = signal([]);
  constructor() {
    console.log(products);
  }
  addToCart(product: any) {
    console.log(this.cartProducts());
    this.cartProducts.update((cv: any) => {
      cv.push(product);
      return cv;
    });
  }
}
