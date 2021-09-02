import { MESSAGE } from './../../constant/index';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { SubmitSeoHomeAction } from '../actionTypes/seoHomeActionTypes';
import { handleMessageErrorSaga, handleMessageSuccessSaga } from '../rootSaga';
import { submitSeoHomeError, submitSeoHomeStart, submitSeoHomeSuccess } from '../slices/seoHomeSlice';
import { submitSeoHomeRequest } from '../../graphql/seoHomeRequest';


function* submitSeoHomeSaga({ payload: { input, beforeCallback } }: SubmitSeoHomeAction) {
  try {
    yield delay(1000);
    yield put(beforeCallback());
    const data = yield submitSeoHomeRequest(input);
    yield put(submitSeoHomeSuccess(data));
    yield handleMessageSuccessSaga(MESSAGE.SUBMIT_SUCCESS);
  } catch (error) {
    yield put(submitSeoHomeError({}));
    yield handleMessageErrorSaga(error);
  }
}
export function* watchSeoHome() {
  yield takeEvery(submitSeoHomeStart, submitSeoHomeSaga);
}