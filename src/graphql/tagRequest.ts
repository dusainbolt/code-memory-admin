import { gql } from '@apollo/client';
import { FormTagInput, SearchTagInput } from '../models/TagModel';
import RequestService from '../services/requestService';

const requestService = new RequestService();

const getListTagQuery = gql`
  query ListTagQuery($input: SearchTagInput!) {
    listTags(input: $input) {
      dataTags {
        createBy
        createdAt
        description
        id
        slug
        tagType
        status
        title
        thumbnail
        updatedAt
        userCreate {
          avatar
          email
          id
          firstName
          lastName
        }
      }
      total
    }
  }
`;

export const getListTagRequest = (input: SearchTagInput, fetchPolicy?: any): any => {
  console.log(fetchPolicy);
  return requestService.query(getListTagQuery, { input }, 'listTags', fetchPolicy);
};

const addTagQuery = gql`
  mutation createTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      createBy
      createdAt
      description
      id
      slug
      tagType
      status
      title
      thumbnail
      updatedAt
      userCreate {
        avatar
        email
        id
        firstName
        lastName
      }
    }
  }
`;

export const addTagRequest = (input: FormTagInput): any => {
  return requestService.mutation(addTagQuery, { input }, 'createTag');
};
