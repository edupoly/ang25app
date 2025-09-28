import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentformComponent } from './studentform/studentform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
  constructor() {}
}
