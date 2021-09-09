import React from 'react';
import { FC } from 'react';
import Box from '../../common/Box';
import ButtonCommon from '../../common/Button';
import { BlogContent, BlogContentType } from '../../models/BlogModel';
import { CodeEditor } from './CodeEditor';
import { DraftEditor } from './DraftEditor';
import { CloseOutlined, MenuOutlined, PlusOutlined } from '@ant-design/icons';

export const BlogFormSection: FC<{ field: BlogContent; index: number }> = ({ field, index }) => {
  return (
    <Box className="section-form mb-30">
      <Box className="control-group flx-center mb-6 align-left">
        <ButtonCommon type="primary" className="handle-drag" shape="circle" icon={<MenuOutlined />} size="small" />
        <ButtonCommon className="btn-green" shape="circle" icon={<PlusOutlined />} size="small" />
        <ButtonCommon danger shape="circle" icon={<CloseOutlined />} size="small" />
      </Box>
      <Box className="field-item p-12">
        {field.type === BlogContentType.CODE && <CodeEditor index={index} />}
        {field.type === BlogContentType.NORMAL && <DraftEditor index={index} />}
      </Box>
    </Box>
  );
};
