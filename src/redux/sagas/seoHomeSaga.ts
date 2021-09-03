import { getSeoHomeRequest } from './../../graphql/seoHomeRequest';
import { MESSAGE } from './../../constant/index';
import { delay, put, takeEvery, call } from 'redux-saga/effects';
import { handleMessageErrorSaga, handleMessageSuccessSaga } from '../rootSaga';
import { getSeoHomeError, getSeoHomeStart, getSeoHomeSuccess, submitSeoHomeError, submitSeoHomeStart, submitSeoHomeSuccess } from '../slices/seoHomeSlice';
import { submitSeoHomeRequest } from '../../graphql/seoHomeRequest';
import { setUploadSliceClose } from '../slices/layoutSlice';
import { SubmitSeoHome } from '../actionTypes/seoHomeActionTypes';


function* submitSeoHomeSaga({ payload: { input } }: SubmitSeoHome) {
  try {
    yield delay(1000);
    yield put(setUploadSliceClose({}));
    const seoHome = yield submitSeoHomeRequest(input);
    yield put(submitSeoHomeSuccess({ seoHome }));
    yield handleMessageSuccessSaga(MESSAGE.SUBMIT_SUCCESS);
  } catch (error) {
    yield put(submitSeoHomeError({}));
    yield handleMessageErrorSaga(error);
  }
}

function* getSeoHomeSaga() {
  try {
    const seoHome = yield getSeoHomeRequest();
    yield put(getSeoHomeSuccess(seoHome));
  } catch (error: any) {
    yield put(getSeoHomeError({}));
    yield handleMessageErrorSaga(error);
  }
}

export function* watchSeoHome() {
  yield takeEvery(submitSeoHomeStart, submitSeoHomeSaga);
  yield takeEvery(getSeoHomeStart, getSeoHomeSaga);
}