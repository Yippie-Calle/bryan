import { createReducer, on } from '@ngrx/store';

import { retrievedHistoryList } from './weather.action';

import { Weather } from '../weather/weather.model';

export const initalState: ReadonlyArray<Weather> = [];

export const weatherReducer = createReducer(
  initalState,
  on(retrievedHistoryList, (state, { history }) => history)
);
