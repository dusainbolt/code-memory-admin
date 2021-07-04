import { all } from 'redux-saga/effects';
import { watchLogin } from './sagas/loginSaga';

function* rootSaga() {
    yield all([watchLogin()]);
}
export default rootSaga;
