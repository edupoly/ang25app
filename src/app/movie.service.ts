import { Injectable } from '@angular/core';
import movies from './movies.json';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}
  getMovieDetailsById(id: number) {
    return movies.find((movie) => {
      console.log(movie.id);
      console.log(id);
      if (movie.id == id) {
        return true;
      } else {
        return false;
      }
    });
  }
}
