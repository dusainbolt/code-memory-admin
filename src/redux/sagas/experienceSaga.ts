import { all, call, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { MESSAGE } from '../../constant';
import { getListExpRequest, submitExpRequest } from '../../graphql/ExperienceRequest';
import { SearchExpOutput } from '../../models/ExperienceModel';
import { ProcessUpload } from '../../models/LayoutModel';
import { getListExpAction, SubmitExpAction } from '../actionTypes/experienceActionTypes';
import { handleMessageErrorSaga, handleMessageSuccessSaga } from '../rootSaga';
import { getListExpError, getListExpStart, getListExpSuccess, submitExpSliceError, submitExpSliceStart, submitExpSliceSuccess } from '../slices/experienceSlice';
import { setProcessUploadSlice } from '../slices/layoutSlice';

function* submitExpSaga({ payload: { input, callback } }: SubmitExpAction) {
  try {
    const data = yield submitExpRequest(input);
    yield delay(300);
    yield put(submitExpSliceSuccess(data));
    yield handleMessageSuccessSaga(MESSAGE.SUBMIT_SUCCESS);
    if (!!callback) {
      yield call(callback);
      yield put(setProcessUploadSlice({ visibleProcessModal: false } as ProcessUpload));
    }
  } catch (error) {
    yield put(submitExpSliceError({}));
    yield handleMessageErrorSaga(error);
  }
}


function* getListExpSaga({ payload }: getListExpAction) {
  try {
    const data = yield getListExpRequest(payload.input, payload.fetchPolicy);
    const dataConvert: SearchExpOutput = {dataExps: data.dataWorks, total: data.total}
    yield delay(300);
    yield put(getListExpSuccess(dataConvert));
  } catch (error) {
    yield put(getListExpError({}));
    yield handleMessageErrorSaga(error);
  }
}

function* watchHandleExp() {
  yield takeEvery(submitExpSliceStart, submitExpSaga);
  yield takeEvery(getListExpStart, getListExpSaga)
}

export default function* watchExpSaga(): any {
  yield all([fork(watchHandleExp)]);
}
