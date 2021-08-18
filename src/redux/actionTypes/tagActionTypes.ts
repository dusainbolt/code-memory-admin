import { FormTagInput, SearchTagInput, SearchTagOutput, Tag } from '../../models/TagModel';
import { PayloadName } from './loginActionTypes';

export type GetListTagAction = Record<
  PayloadName,
  {
    input: SearchTagInput;
    fetchPolicy: any;
  }
>;

export type SubmitFormTagAction = Record<
  PayloadName,
  {
    input: FormTagInput;
    callback?: any;
  }
>;

export type SubmitFormTagActionSuccess = Record<PayloadName, Tag>;

export type GetListTagSuccessAction = Record<PayloadName, SearchTagOutput>;
