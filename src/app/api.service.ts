import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  _id: string;
  _rev: string;
  categories: any;
}

export interface Movie {
  _id: string;
  _rev: string;
  movies: any;
}

export interface Omdb {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private categoryURL = 'https://butler.cloudant.com/pwa/categories';
  private movieURL = 'https://butler.cloudant.com/pwa/movies';
  private omdbURL = 'http://http://www.omdbapi.com/';

  constructor(private httpClient: HttpClient) {}
  getCategories(): Observable<Category> {
    return <Observable<Category>>this.httpClient.get(this.categoryURL);
  }
  getMovies(): Observable<Movie> {
    return <Observable<Movie>>this.httpClient.get(this.movieURL);
  }
  findMovies(): Observable<Omdb> {
    return <Observable<Omdb>>this.httpClient.get(this.omdbURL);
  }
}
