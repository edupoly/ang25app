import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserformComponent } from './userform/userform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
}
