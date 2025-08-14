import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { users } from './users.json';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
  allusers = users;
  maleImage =
    'https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_1280.jpg';
  femaleImage =
    'https://cdn.pixabay.com/animation/2023/03/13/13/58/13-58-51-680_512.gif';
}
