import { gql } from '@apollo/client';
import { CreateExpInput, SearchExpInput, UpdateExpInput } from '../models/ExperienceModel';
import { UpdateTagInput } from '../models/TagModel';
import RequestService from '../services/requestService';
import { ExpResolver, RESPONSE_EXP } from './resolver/expResolver';
import { TagResolver, RESPONSE_TAG } from './resolver/tagResolver';
import { UserResolver } from './resolver/userResolver';

const requestService = new RequestService();


const addExpQuery = gql`
  mutation createExpMutation($input: CreateWorkInput!) {
    ${RESPONSE_EXP.workCreate}(input: $input) {
      ${ExpResolver}
      ${RESPONSE_EXP.userCreate} {
        ${UserResolver}
      }
    }
  }
`;

const getListExpQuery = gql`
  query ListExpQuery($input: SearchWorkInput!) {
    ${RESPONSE_EXP.workList}(input: $input) {
      dataWorks {
        ${ExpResolver}
        ${RESPONSE_EXP.userCreate} {
          ${UserResolver}
        }
      }
      total
    }
  }
`;

export const getListExpRequest = (input: SearchExpInput, fetchPolicy?: any): any => {
  return requestService.query(getListExpQuery, { input }, RESPONSE_EXP.workList, fetchPolicy);
};


export const submitExpRequest = (input: CreateExpInput): any => {
  const id = input.id;
  delete input.id;
  if (!!id) {
    const dataQueryUpdate: UpdateExpInput = { data: input, expId: id };
    // return requestService.mutation(updateTagQuery, { input: dataQueryUpdate }, RESPONSE_TAG.tagUpdate);
  } else {
    return requestService.mutation(addExpQuery, { input }, RESPONSE_EXP.workCreate);
  }
};
