import { LoadingAction, SET_MESSAGE_TRY_CATH_SERVER } from '../actionTypes/loadingActionTypes';

export interface LoadingReducer {
  [key: string]: boolean | string;
}

const getLoadingMatches = (actionType: string) => /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(actionType);

export const loadingReducer = (state: LoadingReducer = {}, action: LoadingAction): LoadingReducer => {
  switch (action.type) {
    case SET_MESSAGE_TRY_CATH_SERVER:
      return {
        ...state,
        messageCrash: action.messageCrash,
      };
    default:
      const matches = getLoadingMatches(action.type);
      if (!matches) {
        return state;
      }

      const [, requestName, requestStatus] = matches;
      return {
        ...state,
        [`${requestName}_REQUESTING`]: requestStatus === 'REQUEST',
      };
  }
};
