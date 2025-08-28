import { JsonPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [JsonPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: any = input([]);
  incCItemEvent = output();
  decCItemEvent = output();
  incCartItemQuantity(item: any) {
    this.incCItemEvent.emit(item);
  }
  decCartItemQuantity(item: any) {
    this.decCItemEvent.emit(item);
  }
  finalTotal() {
    return this.cartItems().reduce((a: any, b: any) => {
      return a + b.price * b.quantity;
    }, 0);
  }
}
