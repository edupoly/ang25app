import { Component, inject } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  private productsService = inject(ProductsService);
  products: any = [];
  ngOnInit() {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
