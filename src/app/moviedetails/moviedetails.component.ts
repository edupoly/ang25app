import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviedetails',
  imports: [],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css',
})
export class MoviedetailsComponent {
  details: any = signal(null);
  constructor(public ar: ActivatedRoute, public mS: MovieService) {
    this.ar.params.subscribe(({ id }) => {
      console.log(id);
      var movieDetails = this.mS.getMovieDetailsById(id);
      console.log(movieDetails);
      this.details.set({ ...movieDetails });
    });
  }
}
