import clsx from 'clsx';
import { useFormikContext } from 'formik';
import React from 'react';
import Box from '../../common/Box';
import { TextAreaCommon } from '../../common/Input/TextArea';
import { BlogContent } from '../../models/BlogModel';
import { Code } from './Code';

export interface ICodeEditor {
  className?: string;
  fieldName: string;
}
export const CodeEditor = ({ className, fieldName }: ICodeEditor) => {
  const { values, setFieldValue } = useFormikContext();
  const fieldValue: BlogContent = values[fieldName];

  const onChangeTextarea = ({ target: { value } }) => {
    console.log(values);
    setFieldValue(fieldName, { ...fieldValue, data: value });
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
