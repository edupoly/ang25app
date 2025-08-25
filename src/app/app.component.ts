import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PosComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
}
