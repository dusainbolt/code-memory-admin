import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { postLoginRequest } from '../../graphql/userRequest';
import { LoginOutput } from '../../models/LoginModel';
import { actionLogin } from '../actionsCreators/loginActionCreators';
import { actionUser } from '../actionsCreators/userActionCreators';
import { postLoginAction, POST_LOGIN_REQUESTING } from '../actionTypes/loginActionTypes';

function* onPostLogin(action: postLoginAction) {
  try {
    const { token, user } = yield postLoginRequest(action.loginInput) as LoginOutput;
    yield put(actionLogin.postLoginSuccess(token));
    yield put(actionUser.setUser(user));
  } catch (error) {
    yield put(actionLogin.postLoginError(error.message as string));
  }
}

function* watchHandleLogin() {
  yield takeEvery(POST_LOGIN_REQUESTING, onPostLogin);
}

export default function* loginSaga(): any {
  yield all([fork(watchHandleLogin)]);
}
