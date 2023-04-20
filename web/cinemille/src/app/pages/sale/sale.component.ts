import { ApiService, Sala } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {
  constructor(private _apiService: ApiService) {}

  public sale: Sala[] = undefined;

  ngOnInit() {
    this._apiService.getSale().subscribe({
      next: (sale) => (this.sale = sale),
      error: (error) => alert(error),
    });
  }
}
