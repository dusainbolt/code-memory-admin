import { loginActionTypes } from './../actions/loginActionCreators';
import { put, takeLatest } from 'redux-saga/effects';

function* login() {
    try {
        // const response = yield getConfigNFTAPI();
        // yield put(configNFTAction.getConfigNFTSuccess(response));
    } catch (e) {
        // yield put(configNFTAction.getConfigNFTError(e));
    }
}

export function* watchLogin() {
    yield takeLatest(loginActionTypes.LOGIN_REQUEST, login);
}
