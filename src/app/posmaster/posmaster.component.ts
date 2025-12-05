import { Component } from '@angular/core';
import { PosComponent } from '../pos/pos.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-posmaster',
  imports: [PosComponent, CartComponent],
  templateUrl: './posmaster.component.html',
  styleUrl: './posmaster.component.css',
})
export class PosmasterComponent {}
