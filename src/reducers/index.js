import { combineReducers } from 'redux';
import { postitReducer } from './addPostitReducer';

export const Reducers = combineReducers({
  postitState: postitReducer,
})
