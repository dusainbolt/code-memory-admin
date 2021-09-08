import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Formik } from 'formik';
import { BlogContent, BlogContentType, blogInput, BLOG_FIELD_NAME } from '../../models/BlogModel';
import { useAppDispatch, useAppSelector } from '../../redux/rootStore';
import { helper, HelperService } from '../../services/helperService';
import { BlogForm } from '../../components/Blog/BlogForm';

const code = `const App = props => {
  return (
    <div>
      <h1> React App </h1>
      <div>Awesome code</div>
    </div>
  );
};
`;

const contentDefault: BlogContent[] = [
  {
    type: BlogContentType.NORMAL,
    data: '123123',
    language: 'normal',
  },
  {
    type: BlogContentType.CODE,
    data: '',
    language: 'javascript',
  },
];

const mapContentBlog = (values: any): BlogContent[] => {
  let contents = [];
  for (const [key] of Object.entries(values)) {
    if (helper.ignoreString(key, BLOG_FIELD_NAME)) {
      continue;
    }
  }
  return contents;
};

export const AddBlogPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(state => state.loginSlice.user);

  const onSubmit = (values: blogInput) => {
    console.log('HaNDLE SUBMIT ==========>', values);
    const data: blogInput = {
      title: values.title,
      description: values.description,
      content: mapContentBlog(values),
      createBy: id,
    };
    // dispatch(actionBlog.addBlog(data));
  };

  const renderListField = fieldObject => {
    // let htmlFlieds: ReactNode[] = [];
    // if (!!!fieldObject) {
    //   return htmlFlieds;
    // }
    // let index = 0;
    // for (const data of Object.entries(fieldObject)) {
    //   const blogContent: BlogContent = data[1];
    //   const fieldName: string = data[0];
    //   if (helper.ignoreString(fieldName, BLOG_FIELD_NAME)) {
    //     continue;
    //   }
    //   if (blogContent.type === BlogContentType.CODE) {
    //     htmlFlieds.push(<CodeEditor index={index} className="mt-26" />);
    //   } else {
    //     htmlFlieds.push(<DraftEditor fieldName={fieldName} key={index} />);
    //   }
    //   index++;
    // }
    return [];
  };

  const items = ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry'];

  return (
    <Formik initialValues={{ title: '', description: '', content: contentDefault }} onSubmit={onSubmit}>
      <BlogForm />
    </Formik>
  );
};
