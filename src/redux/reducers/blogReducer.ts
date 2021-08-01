import { Blog } from '../../models/BlogModel';
import { ADD_BLOG_SUCCESS, BlogAction } from '../actionTypes/blogActionTypes';

export interface BlogReducer {
  blog?: Blog;
}

export const blogReducer = (state: BlogReducer = {}, action: BlogAction): BlogReducer => {
  switch (action.type) {
    case ADD_BLOG_SUCCESS:
      return { ...state, blog: action.blog };
    default:
      return state;
  }
};
