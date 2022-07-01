import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Weather } from '../weather/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './history.component.html',
  styleUrls: ['../app.component.scss'],
})
export class HistoryComponent {
  @Input() history: ReadonlyArray<Weather> = [];
  @Output() remove = new EventEmitter<string>();
}
