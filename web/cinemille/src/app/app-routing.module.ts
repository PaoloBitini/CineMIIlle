import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent } from './pages/films/films.component';
import { NgModule } from '@angular/core';
import { ProgrammazioniComponent } from './pages/programmazioni/programmazioni.component';
import { SaleComponent } from './pages/sale/sale.component';
import { StoricoComponent } from './pages/storico/storico.component';

const routes: Routes = [
  {path: "films", component: FilmsComponent},
  {path: "sale", component: SaleComponent},
  {path: "programmazioni", component: ProgrammazioniComponent},
  {path: "storico", component: StoricoComponent},
  {path: "**", redirectTo: "/films"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
