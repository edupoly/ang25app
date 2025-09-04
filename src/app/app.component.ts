import { SimpleComponent } from './simple/simple.component';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JsonPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [SimpleComponent, FormsModule, RouterOutlet, JsonPipe, SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
