import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Weather } from '../weather/weather.model';

export const selectHistory =
  createFeatureSelector<ReadonlyArray<Weather>>('weather');

export const selectHistoryState =
  createFeatureSelector<ReadonlyArray<string>>('history');

export const selectWeatherHistory = createSelector(
  selectHistory,
  selectHistoryState,
  (weather, history) => {
    return history.map((id) => weather.find((weather) => weather.id === id));
  }
);
