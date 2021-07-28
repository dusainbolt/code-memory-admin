import clsx from 'clsx';
import React, { useState } from 'react';
import Box from '../../common/Box';
import { TextAreaCommon } from '../../common/Input/TextArea';
import { Code } from './Code';
const code = ``;
export const CodeEditor = ({ className }: any) => {
  const [value, setValue] = useState(code);

  const onChangeTextarea = ({ target: { value } }) => {
    setValue(value);
  };
  console.log(value);

  return (
    <Box className={clsx('code-editor', [className] && className)}>
      <Box className="code-editor-input">
        <TextAreaCommon onChange={onChangeTextarea} value={value} autoSize={{ minRows: 3 }} />
      </Box>
      <Code code={value} language="javascript" />
    </Box>
  );
};
