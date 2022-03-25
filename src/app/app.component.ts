import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flag: boolean = true;
  title = 'super-chat';
  name = 'Johnny Cage';
  searchValue: string = '';

  searchTimeOut: any;

  movies: string[] = [
    'Alien',
    'Scream',
    'The Color Out of Space'
  ];
  filteredMovies: string[] = [];

  constructor() {
    this.filteredMovies = this.movies;
  }
  ngOnInit = void {};

  doOnClick(e: any) {
    this.movies.push(this.searchValue);
    this.searchValue = '';
  }
  doSearch() {
    if(this.searchTimeOut) clearTimeout(this.searchTimeOut);

    this.searchTimeOut = setTimeout(() => {
      const searchValue = this.searchValue.toLowerCase();
      console.log('Se hace la busqueda');
      this.filteredMovies = this.movies.filter(movie => {
        return movie.toLowerCase().includes(searchValue);
      });
    }, 200);
  }
}
