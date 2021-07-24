import { Login } from '../../models/LoginModel';
import { loginAction, POST_LOGIN_ERROR, POST_LOGIN_SUCCESS } from '../actionTypes/loginActionTypes';

export const loginReducer = (state: Login = {}, action: loginAction): Login => {
  switch (action.type) {
    case POST_LOGIN_SUCCESS:
      return { ...state, token: action.token, messageError: '' };
    case POST_LOGIN_ERROR:
      return { ...state, messageError: action.messageError };
    default:
      return state;
  }
};
