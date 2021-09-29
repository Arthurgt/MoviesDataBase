import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url + '/movies');
  }

  postMovie(movie: Movie): Observable<Movie[]> {
    return this.http.post<Movie>(this.url + '/movies', movie).pipe(tap(console.log));
  }
}
