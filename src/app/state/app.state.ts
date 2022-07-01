import { Weather } from '../weather/weather.model';

export interface AppState {
  weather: ReadonlyArray<string>;
  history: ReadonlyArray<string>;
}
