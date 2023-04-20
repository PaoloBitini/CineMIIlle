import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { Film } from 'src/app/services/api.service';
import { Filter } from 'src/app/components/filter/filter.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  constructor(private _apiService: ApiService){}

  public films: Film[] = undefined;

  public onFilterChanged(filter: Filter){
    this._apiService.getFilms(filter.da, filter.a, filter.titolo).subscribe({
      next:(films) => this.films = films,
      error: (error) => alert(error)
    });
  }
}
