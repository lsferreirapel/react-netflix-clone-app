import { combineReducers } from 'redux';
import {
  ADD_Data
} from './actions';

const initialData = [
  'test',
  'test2'
]

export function setData(state=initialData, action) {
  switch (action.type) {
    case ADD_DATA:
      return [action.title, ...state];
    default:
      return state
  }
}

export default combineReducers({
  setData,
});
