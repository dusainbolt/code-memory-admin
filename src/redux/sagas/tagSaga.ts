import { all, call, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { MESSAGE } from '../../constant';
import { getListTagRequest, submitTagRequest } from '../../graphql/tagRequest';
import { ProcessUpload } from '../../models/LayoutModel';
import { GetListTagAction, SubmitTagAction } from '../actionTypes/tagActionTypes';
import { handleMessageErrorSaga, handleMessageSuccessSaga } from '../rootSaga';
import { setProcessUploadSlice } from '../slices/layoutSlice';
import {
  getTagListSliceError,
  getTagListSliceStart,
  getTagListSliceSuccess,
  submitTagSliceError,
  submitTagSliceStart,
  submitTagSliceSuccess,
} from '../slices/tagSlice';

function* getListTagSaga({ payload }: GetListTagAction) {
  try {
    const data = yield getListTagRequest(payload.input, payload.fetchPolicy);
    yield delay(300);
    yield put(getTagListSliceSuccess(data));
  } catch (error) {
    yield put(getTagListSliceError({}));
    yield handleMessageErrorSaga(error);
  }
}

function* submitTagSaga({ payload: { input, callback } }: SubmitTagAction) {
  try {
    const data = yield submitTagRequest(input);
    yield delay(300);
    yield put(submitTagSliceSuccess(data));
    yield handleMessageSuccessSaga(MESSAGE.SUBMIT_SUCCESS);
    if (!!callback) {
      yield call(callback);
      yield put(setProcessUploadSlice({ visibleProcessModal: false } as ProcessUpload));
    }
  } catch (error) {
    yield put(submitTagSliceError({}));
    yield handleMessageErrorSaga(error);
  }
}

function* watchHandleTag() {
  yield takeEvery(getTagListSliceStart, getListTagSaga);
  yield takeEvery(submitTagSliceStart, submitTagSaga);
}

export default function* watchTagSaga(): any {
  yield all([fork(watchHandleTag)]);
}
