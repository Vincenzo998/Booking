import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components

import { FlightHotelComponent } from 'src/app/components/flightHotel/flight-hotel.component';
import { SearchComponent } from 'src/app/components/flightHotel/flightSearch/search.component';
import { TableComponent } from 'src/app/components/flightHotel/flightShow/table.component';
import { Search2Component } from 'src/app/components/flightHotel/hotelSearch/search2.component';
import { Table2Component } from 'src/app/components/flightHotel/hotelShow/table2.component';

// Modules

import { SharedModule } from 'src/app/common/shared.module';


const flightHotelSearchModule: Routes = [
  { path: '', component: FlightHotelComponent },
  { path: '**', component: FlightHotelComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(flightHotelSearchModule),
    SharedModule,
  ],
  declarations: [
    FlightHotelComponent,
    SearchComponent,
    TableComponent,
    Search2Component,
    Table2Component,
  ],
  providers: [],
})

export class FlightHotelSearchModule { }
