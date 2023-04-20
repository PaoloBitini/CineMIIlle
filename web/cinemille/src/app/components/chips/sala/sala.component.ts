import { Component, Input } from '@angular/core';

import { Sala } from 'src/app/services/api.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent {

  @Input() public sala: Sala;

}
