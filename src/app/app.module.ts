import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { weatherReducer } from './state/weather.reducer';
import { historyReducer } from './state/history.reducer';

import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';
import { WeatherComponent } from './weather/weather.component';

import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [AppComponent, WeatherComponent, HistoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgrxFormsModule,
    StoreModule.forRoot({ history: historyReducer }),
    StoreModule.forRoot({ weather: weatherReducer }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
