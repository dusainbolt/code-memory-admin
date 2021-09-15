import { Divider } from 'antd';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '../../common/Box';
import ButtonCommon from '../../common/Button';
import { BlogFormSection } from './BlogFormSection';
import { BlogFormInfo } from './BlogFormInfo';
import { ReactSortable } from 'react-sortablejs';
import Sortable, { AutoScroll } from 'sortablejs/modular/sortable.core.esm.js';

Sortable.mount(new AutoScroll());

export const BlogForm: FC<any> = () => {
  const { handleSubmit, setFieldValue } = useFormikContext();
  const { t } = useTranslation();

  const {
    values: { content },
  } = useFormikContext();

  const onChangeList = (data: Array<any>) => {
    setFieldValue('content', data);
  };

  return (
    <Box className="admin__content">
      <Divider orientation="left" className="title-field-divider" plain>
        {t('blog.title_field_blog_info')}
      </Divider>
      <BlogFormInfo />
      <Divider orientation="left" className="title-field-divider" plain>
        {t('blog.title_field_blog_content')}
      </Divider>
      <ReactSortable handle=".handle-drag" list={content as any} setList={onChangeList}>
        {content.map((item, index) => (
          <BlogFormSection content={content} field={item} key={index} index={index} />
        ))}
      </ReactSortable>
      <ButtonCommon onClick={handleSubmit} children="OKe" className="mt-30" />
    </Box>
  );
};
