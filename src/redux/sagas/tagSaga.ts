import { all, call, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { FETCH_POLICY, MESSAGE } from '../../constant';
import { addTagRequest, getListTagRequest } from '../../graphql/tagRequest';
import { ProcessUpload } from '../../models/LayoutModel';
import { GetListTagAction, SubmitFormTagAction } from '../actionTypes/tagActionTypes';
import { handleMessageErrorSaga, handleMessageSuccessSaga } from '../rootSaga';
import { setProcessUploadSlice } from '../slices/layoutSlice';
import {
  getTagListSliceError,
  getTagListSliceStart,
  getTagListSliceSuccess,
  submitFormTagSliceError,
  submitFormTagSliceStart,
  submitFormTagSliceSuccess,
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

function* submitFormTagSaga({ payload }: SubmitFormTagAction) {
  try {
    const data = yield addTagRequest(payload.input);
    yield delay(300);
    yield put(submitFormTagSliceSuccess(data));
    yield handleMessageSuccessSaga(MESSAGE.SUBMIT_SUCCESS);
    if (!!payload.callback) {
      yield call(payload.callback);
      yield put(setProcessUploadSlice({ visibleProcessModal: false } as ProcessUpload));
    }
  } catch (error) {
    yield put(submitFormTagSliceError({}));
    yield handleMessageErrorSaga(error);
  }
}

function* watchHandleTag() {
  yield takeEvery(getTagListSliceStart, getListTagSaga);
  yield takeEvery(submitFormTagSliceStart, submitFormTagSaga);
}

export default function* watchTagSaga(): any {
  yield all([fork(watchHandleTag)]);
}
