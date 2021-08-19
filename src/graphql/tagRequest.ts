import { gql } from '@apollo/client';
import { CreateTagInput, SearchTagInput, UpdateTagInput } from '../models/TagModel';
import RequestService from '../services/requestService';
import { TagResolver } from './resolver/tagResolver';
import { UserResolver } from './resolver/userResolver';

const requestService = new RequestService();

const getListTagQuery = gql`
  query ListTagQuery($input: SearchTagInput!) {
    listTags(input: $input) {
      dataTags {
        ${TagResolver}
        userCreate {
          ${UserResolver}
        }
      }
      total
    }
  }
`;

export const getListTagRequest = (input: SearchTagInput, fetchPolicy?: any): any => {
  return requestService.query(getListTagQuery, { input }, 'listTags', fetchPolicy);
};

const addTagQuery = gql`
  mutation createTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      ${TagResolver}
      userCreate {
        ${UserResolver}
      }
    }
  }
`;

const updateTagQuery = gql`
  mutation UpdateTagMutation($input: UpdateTagInput!) {
    updateTag(input: $input) {
      ${TagResolver}
      userCreate {
        ${UserResolver}
      }
    }
  }
`;

export const submitTagRequest = (input: CreateTagInput): any => {
  const id = input.id;
  delete input.id;
  if (!!id) {
    const dataQueryUpdate: UpdateTagInput = { data: input, tagId: id };
    return requestService.mutation(updateTagQuery, { input: dataQueryUpdate }, 'updateTag');
  } else {
    return requestService.mutation(addTagQuery, { input }, 'createTag');
  }
};
