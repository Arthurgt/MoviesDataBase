import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movies-in-years',
  templateUrl: './movies-in-years.component.html',
  styleUrls: ['./movies-in-years.component.css']
})
export class MoviesInYearsComponent implements OnInit {

  movies: Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const year = this.route.snapshot.paramMap.get('year');
    this.movies = this.http.getMoviesFromYear(year);
  }

}
