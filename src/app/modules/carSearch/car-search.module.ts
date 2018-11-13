import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from 'src/app/components/car/car.component';

// Modules

import { SharedModule } from 'src/app/common/shared.module';


const carSearchModule: Routes = [
  { path: '', component: CarComponent},
  { path: '**', component: CarComponent}
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(carSearchModule),
    SharedModule,
  ],
  declarations: [CarComponent]
})
export class CarSearchModule { }
