import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  allMovies: any[] = [];
  private loading: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.loading = new BehaviorSubject<boolean>(true);
  }

  getAllMovies() {
    this.http.get<any[]>(`${environment.dataUrl}`)
      .subscribe( (movies: any[]) => {
        this.allMovies = movies;
        this.setLoadingStatus(false);
      });
  }

  setLoadingStatus(status: boolean) {
    this.loading.next(status);
  }

  getLoadingMovie() {
    return this.loading.asObservable();
  }

  getMovies() {
    return this.allMovies;
  }
}
