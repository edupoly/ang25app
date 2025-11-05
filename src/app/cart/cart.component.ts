import { Component } from '@angular/core';
import { EcomService } from '../ecom.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public ecomService: EcomService) {}
  cartItems: any = [];
  ngOnInit() {
    this.ecomService.cartSubject.subscribe((citems: any) => {
      console.log(citems);
      this.cartItems = citems;
    });
  }
}
