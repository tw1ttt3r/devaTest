import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterContentChecked {

  loading: boolean = true;
  displayedColumns: string[] = ['name', 'year'];
  movies: any[] = [];
  dataSource: any;
  stop: boolean = false;

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getLoadingMovie().subscribe( (status: boolean) => {
      if (!status) {
        this.movies = this.moviesService.getMovies();
        this.dataSource = new MatTableDataSource<any>(this.movies);
      }
      this.loading = status;
    });
  }

  ngAfterContentChecked() {
    if (!!this.dataSource && !!this.paginator && !this.stop) {
      this.dataSource.paginator = this.paginator;
      this.stop = true;
    }
  }

}
