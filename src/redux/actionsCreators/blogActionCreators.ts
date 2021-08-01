import { Blog, blogInput } from '../../models/BlogModel';
import {
  addBlogAction,
  addBlogActionError,
  addBlogActionSuccess,
  ADD_BLOG_ERROR,
  ADD_BLOG_REQUESTING,
  ADD_BLOG_SUCCESS,
} from '../actionTypes/blogActionTypes';

export const actionBlog = {
  addBlog: (blogInput: blogInput): addBlogAction => ({
    type: ADD_BLOG_REQUESTING,
    blogInput,
  }),
  addBlogSuccess: (blog: Blog): addBlogActionSuccess => ({
    type: ADD_BLOG_SUCCESS,
    blog,
  }),
  addBlogError: (messageError: string): addBlogActionError => ({
    type: ADD_BLOG_ERROR,
    messageError,
  }),
};
