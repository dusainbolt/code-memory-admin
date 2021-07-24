import { LoginInput } from '../../models/LoginModel';
import {
  postLoginAction,
  postLoginActionError,
  postLoginActionSuccess,
  POST_LOGIN_ERROR,
  POST_LOGIN_REQUESTING,
  POST_LOGIN_SUCCESS,
} from '../actionTypes/loginActionTypes';

export const actionLogin = {
  postLogin: (loginInput: LoginInput): postLoginAction => ({
    type: POST_LOGIN_REQUESTING,
    loginInput,
  }),
  postLoginSuccess: (token: string): postLoginActionSuccess => ({
    type: POST_LOGIN_SUCCESS,
    token,
  }),
  postLoginError: (messageError: string): postLoginActionError => ({
    type: POST_LOGIN_ERROR,
    messageError,
  }),
};
