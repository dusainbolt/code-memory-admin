import { TagStatus } from './TagModel';

export interface OptionSelect {
  label: string;
  value: string;
  urlIcon?: any;
  disabled?: boolean;
}
export interface IField {
  name: string;
  label?: string;
  placeholder?: string;
  passwordMode?: boolean;
  options?: OptionSelect[];
}

export interface FieldLogin {
  credential: IField;
  password: IField;
}

export const fieldLogin: FieldLogin = {
  credential: {
    name: 'credential',
    label: 'login.credential',
    placeholder: 'login.place_credential',
  },
  password: {
    name: 'password',
    label: 'login.password',
    placeholder: 'login.place_password',
    passwordMode: true,
  },
};

export interface FieldBlog {
  title: IField;
  description: IField;
}

export const fieldBlog: FieldBlog = {
  title: {
    name: 'title',
    label: 'blog.label_title',
    placeholder: 'blog.place_title',
  },
  description: {
    name: 'description',
    label: 'blog.label_description',
    placeholder: 'blog.place_description',
  },
};

export const OPTION_FILTER_STATUS_TAG: OptionSelect[] = [
  {
    label: 'tag.active',
    value: TagStatus.ACTIVE,
  },
  {
    label: 'tag.hide',
    value: TagStatus.HIDE,
  },
];

export interface FieldSearchTag {
  key: IField;
  status: IField;
}

export const fieldSearchTag: FieldSearchTag = {
  key: {
    name: 'key',
    label: 'tag.label_search_key',
    placeholder: 'tag.place_search_key',
  },
  status: {
    name: 'status',
    label: 'tag.label_search_status',
    options: OPTION_FILTER_STATUS_TAG,
  },
};
