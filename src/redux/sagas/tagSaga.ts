import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { getListTagRequest } from '../../graphql/tagRequest';
import { GetListTagAction } from '../actionTypes/tagActionTypes';
import { handleErrorSaga } from '../rootSaga';
import { getTagListSliceError, getTagListSliceStart, getTagListSliceSuccess } from '../slices/tagSlice';

function* getListTagSaga(action: GetListTagAction) {
  try {
    const data = yield getListTagRequest(action.payload.input);
    yield delay(300);
    yield put(getTagListSliceSuccess(data));
  } catch (error) {
    yield put(getTagListSliceError({}));
    yield handleErrorSaga(error);
  }
}

function* watchHandleTag() {
  yield takeEvery(getTagListSliceStart, getListTagSaga);
}

export default function* watchTagSaga(): any {
  yield all([fork(watchHandleTag)]);
}
