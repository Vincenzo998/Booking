import { Component, OnInit, Input } from '@angular/core';
import { HotelModel } from 'src/app/models/HotelModel';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  @Input() ShowHotel: HotelModel;
  constructor() { }

  ngOnInit() {
  }

}
