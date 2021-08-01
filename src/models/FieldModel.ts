export interface IField {
  name: string;
  label?: string;
  placeholder?: string;
  passwordMode?: boolean;
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
