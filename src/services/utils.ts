import { User } from '../models/UserModel';

export const getFullName = (user: User) => {
  return `${user.firstName} ${user.lastName}`;
};
