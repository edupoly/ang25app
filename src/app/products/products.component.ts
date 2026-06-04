import { Component, inject } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  private ps = inject(ProductsService);
  products: any[] = [];
  constructor() {}
  ngOnChanges() {
    console.log('ngOnChanges Called inside Products Component');
  }
  ngOnInit() {
    this.ps.getAllProducts().subscribe((data: any) => {
      this.products = data['products'];
    });
  }
}
