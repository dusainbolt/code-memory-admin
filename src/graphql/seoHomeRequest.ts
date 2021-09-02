import { RS_SEO_HOME, seoHomeResolver } from './resolver/seoHomeResolver';
import { gql } from '@apollo/client';
import RequestService from '../services/requestService';

const requestService = new RequestService();

const seoHomeCreateQuery = gql`
  mutation Mutation($input: CreateSeoHomeInput!) {
    ${RS_SEO_HOME.seoHomeCreate}(input: $input) {
      ${seoHomeResolver}
    }
}`;

export const submitSeoHomeRequest = (input: any): any => {
  return requestService.mutation(seoHomeCreateQuery, { input }, RS_SEO_HOME.seoHomeCreate);
};
