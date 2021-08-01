import { gql } from '@apollo/client';
import { blogInput } from '../models/BlogModel';
import { LoginInput } from '../models/LoginModel';
import RequestService from '../services/requestService';

const requestService = new RequestService();

const addBlogQuery = gql`
  mutation BlogMutation($title: String!, $createBy: String!, $description: String!, $content: [BlogContentInput!]!) {
    createBlog(input: { title: $title, createBy: $createBy, description: $description, content: $content }) {
      id
    }
  }
`;

export const addBlogRequest = (variables: blogInput): any => {
  return requestService.mutation(addBlogQuery, variables, 'createBlog');
};
