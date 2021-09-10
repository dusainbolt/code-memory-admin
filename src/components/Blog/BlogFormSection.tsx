import React from 'react';
import { FC } from 'react';
import Box from '../../common/Box';
import ButtonCommon from '../../common/Button';
import { BlogContent, BlogContentType } from '../../models/BlogModel';
import { CodeEditor } from './CodeEditor';
import { DraftEditor } from './DraftEditor';
import { CloseOutlined, MenuOutlined, PlusOutlined } from '@ant-design/icons';
import { DefaultType } from './DefaultType';
import { useFormikContext } from 'formik';
import { contentDefault } from '../../pages/Blog/AddBlog';
// import _ from 'lodash';

export const BlogFormSection: FC<{ field: BlogContent; index: number }> = ({ field, index }) => {
  // console.log('DROPPPPPPPP => ', _.dropRight([1, 2, 3], 1));
  const { setFieldValue, values } = useFormikContext();
  const contentValue = (values as any)?.content;

  const onRemoveIndex = () => {
    if (contentValue.length > 1) {
      contentValue.splice(index, 1);
      setFieldValue('content', contentValue);
    } else {
      alert('Không thể xóa nội dung cuối này');
    }
  };

  const onAddIndex = () => {
    contentValue.splice(index, 0, contentDefault[0]);
    setFieldValue('content', contentValue);
  };

  return (
    <Box className="section-form mb-30">
      <Box className="control-group mb-6">
        <ButtonCommon type="primary" className="handle-drag" shape="circle" icon={<MenuOutlined />} size="small" />
        <ButtonCommon className="btn-green" onClick={onAddIndex} shape="circle" icon={<PlusOutlined />} size="small" />
        <ButtonCommon danger shape="circle" onClick={onRemoveIndex} icon={<CloseOutlined />} size="small" />
      </Box>
      <Box className="field-item p-12">
        <DefaultType index={index} />
        {field.type === BlogContentType.CODE && <CodeEditor index={index} />}
        {field.type === BlogContentType.EDITOR && <DraftEditor index={index} />}
      </Box>
    </Box>
  );
};
