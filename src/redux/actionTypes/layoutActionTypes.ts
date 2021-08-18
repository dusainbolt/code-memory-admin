import { NotifySystem, ProcessUpload } from '../../models/LayoutModel';
import { LoginInput } from '../../models/LoginModel';

export type loginAction = {
  type: string;
  loginInput: LoginInput;
  token: string;
  messageError: string;
};

type PayloadName = 'payload';

export type SetNotifyAction = Record<PayloadName, NotifySystem>;
export type SetProcessUploadAction = Record<PayloadName, ProcessUpload>;
