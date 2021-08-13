import React, { ReactNode, useState } from 'react';
import Box from '../../common/Box';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { DraftEditor } from '../../components/Blog/DraftEditor';
import { Code } from '../../components/Blog/Code';
import { CodeEditor } from '../../components/Blog/CodeEditor';
import { Formik } from 'formik';
import { BlogContent, BlogContentType, blogInput, BLOG_FIELD_NAME } from '../../models/BlogModel';
import { ignoreString, mapContentBlog, toObject } from '../../services/utils';
import ButtonCommon from '../../common/Button';
import { FormInputBlog } from '../../components/Blog/FormInputBlog';
import { useAppDispatch, useAppSelector } from '../../redux/rootStore';
// import { actionBlog } from '../../redux/actionsCreators/blogActionCreators';
import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';

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

export const AddBlogPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(state => state.loginSlice.user);
  const { t } = useTranslation();

  const onSubmit = (values: blogInput) => {
    // console.log('HaNDLE SUBMIT ==========>', values);
    const data: blogInput = {
      title: values.title,
      description: values.description,
      content: mapContentBlog(values),
      createBy: id,
    };
    // dispatch(actionBlog.addBlog(data));
  };

  const renderListFiedl = fieldObject => {
    let htmlFlieds: ReactNode[] = [];
    if (!!!fieldObject) {
      return htmlFlieds;
    }
    let index = 0;
    for (const data of Object.entries(fieldObject)) {
      const blogContent: BlogContent = data[1];
      const fieldName: string = data[0];
      if (ignoreString(fieldName, BLOG_FIELD_NAME)) {
        continue;
      }
      if (blogContent.type === BlogContentType.CODE) {
        htmlFlieds.push(<CodeEditor fieldName={fieldName} key={index} className="mt-26" />);
      } else {
        htmlFlieds.push(<DraftEditor fieldName={fieldName} key={index} />);
      }
      index++;
    }
    return htmlFlieds;
  };

  return (
    <Formik initialValues={toObject(contentDefault, BLOG_FIELD_NAME)} onSubmit={onSubmit}>
      {({ values, handleSubmit }) => (
        <Box className="admin__content">
          <Divider orientation="left" className="title-field-divider" plain>
            {t('blog.title_field_blog_info')}
          </Divider>
          <FormInputBlog />
          <Divider orientation="left" className="title-field-divider" plain>
            {t('blog.title_field_blog_content')}
          </Divider>
          {renderListFiedl(values)}
          <ButtonCommon onClick={handleSubmit} children="OKe" className="mt-30" />
        </Box>
      )}
    </Formik>
  );
};
