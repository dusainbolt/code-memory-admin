import { User } from '../../models/UserModel';
import { SetUserAction, SET_USER, UserStartAppAction, USER_START_APP } from '../actionTypes/userActionTypes';

export const actionUser = {
  setUser: (user: User): SetUserAction => ({
    type: SET_USER,
    user,
  }),
  userStartApp: (): UserStartAppAction => ({
    type: USER_START_APP,
  }),
};
