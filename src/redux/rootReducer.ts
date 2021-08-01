import { loginReducer } from './reducers/loginReducer';
import { combineReducers } from 'redux';
import { LoadingReducer, loadingReducer } from './reducers/loadingReducer';
import { userReducer } from './reducers/userReducer';
import { User } from '../models/UserModel';
import { Login } from '../models/LoginModel';
import { blogReducer, BlogReducer } from './reducers/blogReducer';
export interface IRootProps {
  loginReducer: Login;
  loadingReducer: LoadingReducer;
  userReducer: User;
  blogReducer: BlogReducer;
}

export default combineReducers({
  loginReducer,
  loadingReducer,
  userReducer,
  blogReducer,
});
