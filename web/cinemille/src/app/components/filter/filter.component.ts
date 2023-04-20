import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() public filterChanged  = new EventEmitter<Filter>();

  range = new FormGroup({
    da: new FormControl<Date | null>(null),
    a: new FormControl<Date | null>(null),
  });

  titolo:string = ""


  public buttonPressed(){
    let value = this.range.getRawValue();
    this.filterChanged.emit( {...value, titolo: this.titolo});
  }
}

export interface Filter extends DateFilter{
  titolo: string;
}

export interface DateFilter{
  da: Date;
  a: Date;
}
