import clsx from 'clsx';
import { useFormikContext } from 'formik';
import React from 'react';
import Box from '../../common/Box';
import { TextAreaCommon } from '../../common/Input/TextArea';
import { BlogContent } from '../../models/BlogModel';
import { Code } from './Code';

export interface ICodeEditor {
  className?: string;
  index: number;
}
export const CodeEditor = ({ className, index }: ICodeEditor) => {
  const { values, setFieldValue } = useFormikContext();
  const contentValue = (values as any)?.content;
  const fieldValue: BlogContent = contentValue[index];

  const onChangeTextarea = ({ target: { value } }) => {
    const fieldChangeVal = { ...fieldValue, data: value };
    contentValue[index] = fieldChangeVal;
    setFieldValue('content', contentValue);
  };

  return (
    <Box className={clsx('code-editor', [className] && className)}>
      <Box className="code-editor-input">
        <TextAreaCommon onChange={onChangeTextarea} value={fieldValue.data} autoSize={{ minRows: 3 }} />
      </Box>
      <Code code={fieldValue.data} language="javascript" />
    </Box>
  );
};
