import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EcomService } from '../ecom.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-pos',
  imports: [CartComponent],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css',
})
export class POSComponent {
  constructor(public http: HttpClient, public ecomService: EcomService) {}
  items: any;
  ngOnInit() {
    this.http.get('https://dummyjson.com/products').subscribe((res: any) => {
      console.log(res);
      this.items = res['products'];
      this.ecomService.cart.next([]);
    });
  }
  addToCart(item: any) {
    this.ecomService.addToCart(item);
  }
}
