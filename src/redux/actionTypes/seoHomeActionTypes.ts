import { SeoHome } from './../../models/SeoHomeModel';
import { PayloadName } from './loginActionTypes';


export type SubmitSeoHome = Record<PayloadName, { input: SeoHome }>;

export type GetListSeoHomeSuccess = Record<PayloadName, { seoHomeEntire: SeoHome[] }>;

export type SubmitSeoHomeSuccess = Record<PayloadName, { seoHome: SeoHome }>;
