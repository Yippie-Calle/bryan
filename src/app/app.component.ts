import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectHistory, selectWeatherHistory } from './state/weather.selectors';

import {
  addHistory,
  removeHistory,
  retrievedHistoryList,
} from './state/weather.action';

import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  weather$ = this.store.select(selectHistory);
  history$ = this.store.select(selectWeatherHistory);
  onAdd(weatherId: string) {
    this.store.dispatch(addHistory({ weatherId }));
  }
  onRemove(weatherId: string) {
    this.store.dispatch(removeHistory({ weatherId }));
  }
  constructor(private weatherService: WeatherService, private store: Store) {}

  ngOnInit() {
    this.weatherService
      .getWeather()
      .subscribe((weather) =>
        this.store.dispatch(retrievedHistoryList({ history }))
      );
  }
}
