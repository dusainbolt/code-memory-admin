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
  for (const [key] of Object.entries(values)) {
    if (ignoreString(key, BLOG_FIELD_NAME)) {
      continue;
    }
  }
  return contents;
};

export const getFullNameUser = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};

export const getOrderType = (order: string) => (order === 'ascend' && 1) || (order === 'descend' && -1) || null;

export const handleResetSearch = (handleReset: any, handleSubmit: any) => () => {
  handleReset();
  handleSubmit();
};
