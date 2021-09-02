import { SeoHome } from './../../models/SeoHomeModel';
import { PayloadName } from './loginActionTypes';

export type SubmitSeoHome = {
  input: SeoHome,
  beforeCallback?: any,
}

export type SubmitSeoHomeAction = Record<PayloadName, SubmitSeoHome>;

