export const BLOG_FIELD_NAME = 'blog_content_field';

export enum BlogContentType {
  CODE,
  EDITOR,
}

export interface BlogContent {
  type?: BlogContentType;

  data?: string;

  language?: string;
}

export interface Blog {
  id: string;

  title: string;

  slug: string;

  description: string;

  createBy: string;

  content: BlogContent[];

  createdAt?: string;

  updatedAt?: string;
}

export interface blogInput {
  title: string;
  description: string;
  content: BlogContent[];
  createBy?: string;
}
