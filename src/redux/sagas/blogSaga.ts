import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { addBlogRequest } from '../../graphql/blogRequest';
import { Blog } from '../../models/BlogModel';
import { actionBlog } from '../actionsCreators/blogActionCreators';
import { actionLogin } from '../actionsCreators/loginActionCreators';
import { addBlogAction, ADD_BLOG_REQUESTING } from '../actionTypes/blogActionTypes';

function* onAddBlog(action: addBlogAction) {
  try {
    const data: Blog = yield addBlogRequest(action.blogInput);
    yield put(actionBlog.addBlogSuccess(data));
  } catch (error) {
    yield put(actionLogin.postLoginError(error?.message as string));
  }
}

function* watchHandleBlog() {
  yield takeEvery(ADD_BLOG_REQUESTING, onAddBlog);
}

export default function* blogSaga(): any {
  yield all([fork(watchHandleBlog)]);
}
