import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './reducers/loginReducer';

export interface IRootProps {
    loginReducer: any
}

export default combineReducers({
    loginReducer,
});
