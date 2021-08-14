import { gql } from '@apollo/client';
import { LoginInput } from '../models/LoginModel';
import RequestService from '../services/requestService';

const requestService = new RequestService();

const postLoginQuery = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        email
        firstName
        password
        lastName
        avatar
        facebook
      }
    }
  }
`;

export const postLoginRequest = (input: LoginInput): any => {
  return requestService.mutation(postLoginQuery, { input }, 'login');
};
