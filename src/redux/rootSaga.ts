import { all } from 'redux-saga/effects';
import blogSaga from './sagas/blogSaga';
import loginSaga from './sagas/loginSaga';

function* rootSaga() {
  yield all([loginSaga(), blogSaga()]);
}
export default rootSaga;
