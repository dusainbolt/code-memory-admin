import { User } from '../../models/UserModel';
import { SET_USER, UserAction } from '../actionTypes/userActionTypes';

export const userReducer = (state: User = {}, action: UserAction): User => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
};
