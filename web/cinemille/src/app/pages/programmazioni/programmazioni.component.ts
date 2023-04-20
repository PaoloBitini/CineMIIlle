import { ApiService, Programmazione } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

import { DateFilter } from 'src/app/components/filter/filter.component';

@Component({
  selector: 'app-programmazioni',
  templateUrl: './programmazioni.component.html',
  styleUrls: ['./programmazioni.component.scss'],
})
export class ProgrammazioniComponent implements OnInit {
  constructor(private _apiService: ApiService) {}

  public programmazioni: Programmazione[];

  ngOnInit(): void {
    let span = this.getThisWeekSpan();
    this._apiService.getProgrammazioni(span.da, span.a).subscribe({
      next: (programmazioni) => (this.programmazioni = programmazioni),
      error: (er) => alert(er.message),
    });
  }

  public getThisWeekSpan(): DateFilter {
    let lunedi = new Date();
    let giornoLunedi = lunedi.getDate() - lunedi.getDay()+1;
    lunedi.setDate(giornoLunedi);

    let lunediPrx = new Date();
    lunediPrx.setDate(giornoLunedi + 7);

    return {
      da: lunedi,
      a: lunediPrx,
    };
  }
}
