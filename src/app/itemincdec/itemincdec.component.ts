import { Component, input } from '@angular/core';
import { EcomService } from '../ecom.service';

@Component({
  selector: 'app-itemincdec',
  imports: [],
  templateUrl: './itemincdec.component.html',
  styleUrl: './itemincdec.component.css',
})
export class ItemincdecComponent {
  item = input<any>();
  constructor(public ecomService: EcomService) {}
}
