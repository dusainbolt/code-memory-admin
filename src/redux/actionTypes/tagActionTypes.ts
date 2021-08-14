import { SearchTagInput, SearchTagOutput } from '../../models/TagModel';
import { PayloadName } from './loginActionTypes';

export type GetListTagAction = Record<
  PayloadName,
  {
    input: SearchTagInput;
  }
>;

export type GetListTagSuccessAction = Record<PayloadName, SearchTagOutput>;
