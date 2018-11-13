import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrainComponent } from '../../components/train/train.component';

// Modules

import { SharedModule } from 'src/app/common/shared.module';


const trainSearchModule: Routes = [
  { path: '', component: TrainComponent },
  { path: '**', component: TrainComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(trainSearchModule),
    SharedModule,
  ],
  declarations: [TrainComponent]
})

export class TrainSearchModule { }
