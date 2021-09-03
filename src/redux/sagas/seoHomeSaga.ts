import { getSeoHomeRequest, getSeoHomeEntireRequest } from './../../graphql/seoHomeRequest';
import { MESSAGE } from './../../constant/index';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { handleMessageErrorSaga, handleMessageSuccessSaga } from '../rootSaga';
import { getSeoHomeError, getSeoHomeEntireError, getSeoHomeEntireStart, getSeoHomeEntireSuccess, getSeoHomeStart, getSeoHomeSuccess, submitSeoHomeError, submitSeoHomeStart, submitSeoHomeSuccess } from '../slices/seoHomeSlice';
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


function* getSeoHomeEntireSaga() {
  try {
    const seoHomeEntire = yield getSeoHomeEntireRequest();
    yield put(getSeoHomeEntireSuccess({ seoHomeEntire }));
  } catch (error: any) {
    yield put(getSeoHomeEntireError({}));
    yield handleMessageErrorSaga(error);
  }
}

export function* watchSeoHome() {
  yield takeEvery(submitSeoHomeStart, submitSeoHomeSaga);
  yield takeEvery(getSeoHomeStart, getSeoHomeSaga);
  yield takeEvery(getSeoHomeEntireStart, getSeoHomeEntireSaga);
}