import { combineReducers } from 'redux';
import step1Reducer from './step1';
import summaReducer from './summa'
export default combineReducers({
  step1State: step1Reducer,
  summaState: summaReducer,
});
