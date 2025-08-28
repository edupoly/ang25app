import { Component, signal } from '@angular/core';
import { products } from '../products.json';
import { CartComponent } from '../cart/cart.component';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-pos',
  imports: [CartComponent, CurrencyPipe],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css',
})
export class PosComponent {
  allproducts = signal(products);
  cartProducts: any = signal([]);
  addToCart(product: any) {
    product.quantity = 1;
    this.cartProducts.update((cv: any) => {
      cv.push(product);
      return cv;
    });
  }
  isProductInCart(product: any) {
    return this.cartProducts().find((cItem: any) => {
      if (cItem.id === product.id) {
        return true;
      } else {
        return false;
      }
    });
  }
  incQuantity(product: any) {
    this.cartProducts.update((cItems: any) => {
      return cItems.map((cItem: any) => {
        if (cItem.id === product.id) {
          cItem.quantity++;
        }
        return cItem;
      });
    });
  }
  decQuantity(product: any) {
    this.cartProducts.update((cItems: any) => {
      return cItems.map((cItem: any) => {
        if (cItem.id === product.id) {
          cItem.quantity--;
        }
        return cItem;
      });
    });
  }
}
