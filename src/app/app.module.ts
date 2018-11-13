// Build-in

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';

// Modules

import { AppRoutingModule } from './routing/app-routing.module';
import { SharedModule } from './common/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
