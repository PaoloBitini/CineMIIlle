import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FilmComponent } from './components/chips/film/film.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatNativeDateModule } from '@angular/material/core'
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ProgrammazioniComponent } from './pages/programmazioni/programmazioni.component';
import { SalaComponent } from './components/chips/sala/sala.component';
import { SaleComponent } from './pages/sale/sale.component';
import { StoricoComponent } from './pages/storico/storico.component';
import { TabellaProgrammazioniComponent } from './components/chips/tabella-programmazioni/tabella-programmazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ProgrammazioniComponent,
    SaleComponent,
    FilmsComponent,
    StoricoComponent,
    SalaComponent,
    FilmComponent,
    TabellaProgrammazioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [MatNativeDateModule,
  ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
