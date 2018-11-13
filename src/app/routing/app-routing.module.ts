import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from '../components/home/home.component';
import { CarSearchModule } from '../modules/carSearch/car-search.module';

// Modules

import { TrainSearchModule } from '../modules/trainSearch/train-search.module';
import { FlightHotelSearchModule } from '../modules/flightHotelSearch/flight-hotel-search.module';

const routes: Routes = [
 { path: '', redirectTo: 'Home', pathMatch: 'full' },
 { path: 'Home', component: HomeComponent },
 { path: 'CarSearch', loadChildren: () => CarSearchModule },
 { path: 'TrainSearch', loadChildren: () => TrainSearchModule },
 { path: 'FlightHotelSearch', loadChildren: () => FlightHotelSearchModule }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
