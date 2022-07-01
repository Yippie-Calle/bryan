import { createReducer, on } from '@ngrx/store';
import { addHistory, removeHistory } from './weather.action';

export const initalState: ReadonlyArray<string> = [];

export const historyReducer = createReducer(
  initalState,
  on(removeHistory, (state, { weatherId }) =>
    state.filter((id) => id !== weatherId)
  ),
  on(addHistory, (state, { weatherId }) => {
    if (state.indexOf(weatherId) > -1) return state;
    return [...state, weatherId];
  })
);
