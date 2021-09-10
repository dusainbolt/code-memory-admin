import clsx from 'clsx';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';
import Box from '../../common/Box';
import { TextAreaCommon } from '../../common/Input/TextArea';
import { BlogContent } from '../../models/BlogModel';
import { Code } from './Code';

export const CodeEditor: FC<{
  className?: string;
  index?: number;
}> = ({ className, index }) => {
  const { setFieldValue, values } = useFormikContext();
  const contentValue = (values as any)?.content;
  const fieldValue: BlogContent = contentValue[index];

  const onChangeTextarea = ({ target: { value } }) => {
    const fieldChangeVal = { ...fieldValue, data: value };
    contentValue[index] = fieldChangeVal;
    setFieldValue('content', contentValue);
  };

  console.log('123123');
  return (
    <Box className={clsx('code-editor', [className] && className)}>
      <Box className="code-editor-input">
        <TextAreaCommon onChange={onChangeTextarea} value={fieldValue.data} autoSize={{ minRows: 3 }} />
      </Box>
      <Code code={fieldValue.data} language={fieldValue.language} />
    </Box>
  );
};
