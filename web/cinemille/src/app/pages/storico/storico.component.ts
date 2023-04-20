import { ApiService, Programmazione } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storico',
  templateUrl: './storico.component.html',
  styleUrls: ['./storico.component.scss']
})
export class StoricoComponent implements OnInit{

  constructor(private _apiService: ApiService) {}

  public programmazioni: Programmazione[];

  ngOnInit(): void {
    this._apiService.getStorico().subscribe({
      next: (programmazioni) => (this.programmazioni = programmazioni),
      error: (er) => alert(er.message),
    });
  }
}
