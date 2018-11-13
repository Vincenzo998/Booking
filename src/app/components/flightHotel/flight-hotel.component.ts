import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-hotel',
  templateUrl: './flight-hotel.component.html',
  styleUrls: ['./flight-hotel.component.css']
})
export class FlightHotelComponent implements OnInit {

  ShowListHotel = [];
  isavailable = true;
  constructor() { }

  ngOnInit() {
  }

  change(event) {
    this.isavailable = event.target.value === 'air' ? this.isavailable = true : this.isavailable = false;
  }

  onFormsResult(event) {
    this.ShowListHotel = event;
  }
}
