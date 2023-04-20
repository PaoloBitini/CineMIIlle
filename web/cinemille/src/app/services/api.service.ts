import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'http://localhost:5116/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getSale(): Observable<Sala[]> {
    return this.httpClient.get(url + 'api/sale/get') as Observable<Sala[]>;
  }

  public getFilms(from: Date, to: Date, titolo: string): Observable<Film[]> {
    let reqUrl =
      url +
      `api/movies/get/${this.getDateFormatted(from)}/${this.getDateFormatted(
        to
      )}`;
    if (titolo) reqUrl += `/${this.getStringFormatted(titolo)}`;

    return this.httpClient.get(reqUrl) as Observable<Film[]>;
  }

  public getProgrammazioni(from: Date, to: Date): Observable<Programmazione[]> {
    return this.httpClient.get(
      url +
        `api/programmazioni/get/${this.getDateFormatted(
          from
        )}/${this.getDateFormatted(to)}`
    ) as Observable<Programmazione[]>;
  }

  public getStorico(): Observable<Programmazione[]> {
    return this.httpClient.get(url + `api/programmazioni/get`) as Observable<
      Programmazione[]
    >;
  }

  private getDateFormatted(date: Date): string {
    if (date) {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return `${year}-${month}-${day}`;
    }
    return null;
  }

  private getStringFormatted(str: string): string {
    return str ? str : 'null';
  }
}

export interface Film {
  id: number;
  titolo: string;
  regista: string;
  dataUscita: Date;
  dataFinePermanenza: Date;
}

export interface Programmazione {
  id: number;
  sala: Sala;
  film: Film;
  dataOraProiezione: Date;
}

export interface Sala {
  id: number;
  nome: string;
  capienza: number;
  imax: true;
}
