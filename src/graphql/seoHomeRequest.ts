import { SeoHome } from './../models/SeoHomeModel';
import { FETCH_POLICY } from './../constant/index';
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

export const seoHomeQuery = gql`
  {
    ${RS_SEO_HOME.getSeoHome} {
      ${seoHomeResolver}
    }
  }
`;

export const seoHomeEntireQuery = gql`
  {
    ${RS_SEO_HOME.seoHomeEntire} {
      ${seoHomeResolver}
    }
  }
`;

export const getSeoHomeRequest = async (): Promise<SeoHome> => {
  return await requestService.query(seoHomeQuery, {}, RS_SEO_HOME.getSeoHome, FETCH_POLICY.NO_CACHE);
};


export const getSeoHomeEntireRequest = async (policy): Promise<SeoHome> => {
  return await requestService.query(seoHomeEntireQuery, {}, RS_SEO_HOME.seoHomeEntire, policy);
};