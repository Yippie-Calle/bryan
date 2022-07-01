import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Weather } from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './weather.component.html',
  styleUrls: ['../app.component.scss'],
})
export class WeatherComponent {
  @Input() weathers: ReadonlyArray<Weather> = [];
  @Output() add = new EventEmitter<string>();
}
