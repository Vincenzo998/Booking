import { Component, OnInit, Input } from '@angular/core';
import { FlightModel } from 'src/app/models/FlightModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() ShowFlight: FlightModel;
  constructor() {}

  ngOnInit() {
  }

}
