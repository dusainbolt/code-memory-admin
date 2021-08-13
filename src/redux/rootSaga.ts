import { all } from 'redux-saga/effects';
import blogSaga from './sagas/blogSaga';
import WatchLoginSaga from './sagas/loginSaga';

function* rootSaga() {
  yield all([WatchLoginSaga(), blogSaga()]);
}
export default rootSaga;
