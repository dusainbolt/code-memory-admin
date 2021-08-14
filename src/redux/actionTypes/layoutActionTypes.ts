import { NotifySystem } from '../../models/LayoutModel';
import { LoginInput, LoginSlice } from '../../models/LoginModel';

export type loginAction = {
  type: string;
  loginInput: LoginInput;
  token: string;
  messageError: string;
};

type PayloadName = 'payload';

export type SetNotifyAction = Record<PayloadName, NotifySystem>;
