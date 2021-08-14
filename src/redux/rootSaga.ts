import { all, put } from 'redux-saga/effects';
import { NotifySystem, TypeNotify } from '../models/LayoutModel';
import { setNotifySlice } from './slices/layoutSlice';
import WatchLoginSaga from './sagas/loginSaga';
import watchTagSaga from './sagas/tagSaga';

function* rootSaga() {
  yield all([WatchLoginSaga(), watchTagSaga()]);
}

export function* handleErrorSaga(error) {
  yield put(setNotifySlice({ messageNotify: error.message, typeNotify: TypeNotify.ERROR, createTime: new Date().getTime() } as NotifySystem));
}

export default rootSaga;
