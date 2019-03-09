import { combineReducers } from 'redux';
import step1Reducer from './step1';

export default combineReducers({
  step1State: step1Reducer,
});
