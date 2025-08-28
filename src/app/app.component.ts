import {
  DecimalPipe,
  LowerCasePipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SortPipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe,
    DecimalPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
  myname = 'Praveen Gubbala';
  price = 3483;
  ar = [19, 10, 45, 15, 24];
}
