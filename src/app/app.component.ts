import { ProductsService } from './products.service';
import { SimpleComponent } from './simple/simple.component';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JsonPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
@Component({
  selector: 'app-root',
  imports: [
    ProductsComponent,
    SimpleComponent,
    FormsModule,
    RouterOutlet,
    JsonPipe,
    SlicePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
