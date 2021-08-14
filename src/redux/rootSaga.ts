import { all, put } from 'redux-saga/effects';
import { NotifySystem, TypeNotify } from '../models/LayoutModel';
import blogSaga from './sagas/blogSaga';
import WatchLoginSaga from './sagas/loginSaga';
import { setNotifySlice } from './slices/layoutSlice';

function* rootSaga() {
  yield all([WatchLoginSaga(), blogSaga()]);
}

export function* handleErrorSaga(error) {
  yield put(setNotifySlice({ messageNotify: error.message, typeNotify: TypeNotify.ERROR, createTime: new Date().getTime() } as NotifySystem));
}

export default rootSaga;
