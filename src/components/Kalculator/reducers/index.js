import { combineReducers } from '../../../../../../.cache/typescript/2.9/node_modules/@types/react-redux/node_modules/redux';
import step1Reducer from './step1';
import step2Reducer from './step2';
import summaReducer from './summa'
export default combineReducers({
  step1State: step1Reducer,
  step2State: step2Reducer,
  summaState: summaReducer,
});
