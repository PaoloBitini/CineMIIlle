import { Component, Input } from '@angular/core';

import { Programmazione } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabella-programmazioni',
  templateUrl: './tabella-programmazioni.component.html',
  styleUrls: ['./tabella-programmazioni.component.scss']
})
export class TabellaProgrammazioniComponent {

  @Input() public programmazioni: Programmazione[]

  public columnsToDisplay = ['id', 'titolo', 'sala', 'data'];
}
