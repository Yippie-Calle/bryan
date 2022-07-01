import { createAction, props } from '@ngrx/store';
import { Weather } from '../weather/weather.model';

export const addHistory = createAction(
  '[History List] Add History',
  props<{ weatherId: string }>()
);

export const removeHistory = createAction(
  '[History List] Add History',
  props<{ weatherId: string }>()
);

export const retrievedHistoryList = createAction(
  '[History List/API] Retrieve History Success',
  props<{ history: ReadonlyArray<Weather> }>()
);
