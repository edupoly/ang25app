import { Component } from '@angular/core';
import { EcomService } from '../ecom.service';
import { ItemincdecComponent } from '../itemincdec/itemincdec.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [ItemincdecComponent, CurrencyPipe],
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
}
