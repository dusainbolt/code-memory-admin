import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { postLoginRequest } from '../../graphql/userRequest';
import { LoginActionInput } from '../actionTypes/loginActionTypes';
import { handleErrorSaga } from '../rootSaga';
import { loginSliceError, loginSliceStart, loginSliceSuccess } from '../slices/loginSlice';

function* loginSaga(action: LoginActionInput) {
  try {
    const data = yield postLoginRequest(action.payload.input);
    yield put(loginSliceSuccess(data));
  } catch (error) {
    yield put(loginSliceError({}));
    yield handleErrorSaga(error);
  }
}

function* watchHandleLogin() {
  yield takeEvery(loginSliceStart, loginSaga);
}

export default function* WatchLoginSaga(): any {
  yield all([fork(watchHandleLogin)]);
}
