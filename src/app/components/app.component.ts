import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../core/services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'devaTest';

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies();
  }

}
