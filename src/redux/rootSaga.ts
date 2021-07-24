import { all } from 'redux-saga/effects';
import loginSaga from './sagas/loginSaga';

function* rootSaga() {
  yield all([loginSaga()]);
}
export default rootSaga;
