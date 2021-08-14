import { User } from './UserModel';

export enum TagStatus {
  HIDE = 'HIDE',
  ACTIVE = 'ACTIVE',
}

export enum TagType {
  SYSTEM = 'SYSTEM',
  ADDITION = 'ADDITION',
}

export interface SearchTagInput {
  key: string;
  status: TagStatus[];
  limit: number;
  offset: number;
}

export interface Tag {
  createBy?: string;
  createdAt?: string;
  description?: string;
  id?: string;
  slug?: string;
  status?: TagStatus;
  tagType?: TagType;
  thumbnail?: string;
  title?: string;
  updatedAt?: string;
  userCreate?: User;
}

export type TagSlice = {
  dataTags: Tag[];
  total: number;
};

export interface SearchTagOutput {
  dataTags: Tag[];
  total: number;
}
