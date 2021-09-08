import React from 'react';
import { FC } from 'react';
import Box from '../../common/Box';
import { BlogContent, BlogContentType } from '../../models/BlogModel';
import { CodeEditor } from './CodeEditor';
import { DraftEditor } from './DraftEditor';

export const BlogFormSection: FC<{ field: BlogContent; index: number }> = ({ field, index }) => {
  return (
    <Box className="section-form">
      <Box className="control-group"></Box>
      <Box className="field-item">
        {field.type === BlogContentType.CODE && <CodeEditor index={index} className="mt-26" />}
        {field.type === BlogContentType.NORMAL && <DraftEditor index={index} />}
      </Box>
    </Box>
  );
};
