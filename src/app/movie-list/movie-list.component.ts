import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../api.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Array<Movie>;
  front: boolean;
  findMovie = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  @ViewChild('new') nameField: ElementRef;

  // Autofocus directive
  focus(): void {
    this.nameField.nativeElement.focus();
  }

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getMovies();
    this.focus();
    this.front = true;

    this.filteredOptions = this.findMovie.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // Toggle poster vs text
  flip() {
    this.front = !this.front;
  }
  // Get movie data
  //apikey=3998009c
  // http://www.omdbapi.com/?s=apoll*&apikey=3998009c&type=movie&page=1

  getMovies() {
    this.apiService.getMovies().subscribe(
      (data) => {
        console.log(data);
        this.movies = data.movies;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
