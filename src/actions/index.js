import { CLICK_ADD_POSTIT } from './actionTypes';

export const handleAdd = value => ({
  type: CLICK_ADD_POSTIT,
  payload: value
})
