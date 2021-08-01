import { BlogContent, BLOG_FIELD_NAME } from '../models/BlogModel';
import { User } from '../models/UserModel';

export const getFullName = (user: User) => {
  return `${user.firstName} ${user.lastName}`;
};

export const toObject = (arr: Array<any>, fieldName: string) => {
  let obj = {};
  if (!!!arr?.length) {
    return obj;
  }
  arr.forEach((item, index) => {
    obj[`${fieldName}_${index}`] = item;
  });
  return obj;
};

export const ignoreString = (string: string, key: string) => {
  return string?.indexOf(key) === -1;
};

export const mapContentBlog = (values: any): BlogContent[] => {
  let contents = [];
  for (const [key, value] of Object.entries(values)) {
    if (ignoreString(key, BLOG_FIELD_NAME)) {
      continue;
    }
    contents.push(value);
  }
  return contents;
};
