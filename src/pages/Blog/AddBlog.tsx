import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Formik } from 'formik';
import { BlogContent, BlogContentType, blogInput, BLOG_FIELD_NAME } from '../../models/BlogModel';
import { useAppDispatch, useAppSelector } from '../../redux/rootStore';
import { helper } from '../../services/helperService';
import { BlogForm } from '../../components/Blog/BlogForm';
import { dataBlogDefault } from '../../components/Blog/DefaultType';
import { draftService } from '../../services/draftService';

export const contentDefault: BlogContent[] = [
  {
    type: BlogContentType.EDITOR,
    data: dataBlogDefault[BlogContentType.EDITOR],
    language: 'js',
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
    console.log(
      'HaNDLE SUBMIT ==========>',
      values.content.forEach(item => item.type === BlogContentType.EDITOR && console.log(draftService.draftBlocksToHtml(item.data)))
    );
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

  return (
    <Formik initialValues={{ title: '', description: '', content: contentDefault }} onSubmit={onSubmit}>
      <BlogForm />
    </Formik>
  );
};
