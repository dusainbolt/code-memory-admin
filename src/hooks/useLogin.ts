import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginInput } from '../models/LoginModel';
import { actionLogin } from '../redux/actionsCreators/loginActionCreators';
import { useAppDispatch, useAppSelector } from '../redux/rootStore';

interface UseLogin {
  loginInput: LoginInput;
  handleLogin: (values: LoginInput) => void;
}

export const useLogin = (): UseLogin => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(state => state.loginReducer);

  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push('/DASHBOARD_BLOG');
    }
  }, [token]);
  const loginInput: LoginInput = { credential: '', password: '' };

  const handleLogin = (values: LoginInput) => {
    dispatch(actionLogin.postLogin(values));
  };

  return { loginInput, handleLogin };
};
