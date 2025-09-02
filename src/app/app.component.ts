import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { products } from './products.json';
import { JsonPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, JsonPipe, SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
  allproducts = signal(products);
  si = signal(0);
  perpage = signal(5);
  nextPage() {
    this.si.update((cv) => {
      return cv + this.perpage();
    });
  }
  prevPage() {
    this.si.update((cv) => {
      return cv - this.perpage();
    });
  }
  updatePerPage(ev: any) {
    this.perpage.set(+ev.target.value);
  }
}
