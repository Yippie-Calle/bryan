import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from './weather.model';

import { environment } from 'src/environments/environment';

import * as moment from 'moment';

const apiKey: string = environment.apiKey;
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<Array<Weather>> {
    return this.http
      .get<{ items: Weather[] }>('http://api.weatherapi.com/v1')
      .pipe(map((weather) => weather.items || []));
  }
}
