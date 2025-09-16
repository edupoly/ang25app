import { Component, signal } from '@angular/core';
import movies from '../movies.json';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-moviesmaster',
  imports: [RouterLink],
  templateUrl: './moviesmaster.component.html',
  styleUrl: './moviesmaster.component.css',
})
export class MoviesmasterComponent {
  allmovies: any = signal(movies);
  constructor() {
    console.log('movies', movies);
  }
}
