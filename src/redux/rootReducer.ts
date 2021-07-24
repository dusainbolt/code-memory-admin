import { loginReducer } from './reducers/loginReducer';
import { combineReducers } from 'redux';
export interface IRootProps {
  loginReducer: any;
}

export default combineReducers({
  loginReducer,
});
