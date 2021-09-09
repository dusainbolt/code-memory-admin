import React, { FC, useMemo } from 'react';
import Box from '../../common/Box';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { TextAreaCommon } from '../../common/Input/TextArea';
import clsx from 'clsx';
import { BlogContent } from '../../models/BlogModel';
import { useFormikContext } from 'formik';
import { draftService } from '../../services/draftService';

export const DraftEditor: FC<{ className?: string; index?: number }> = ({ className, index }) => {
  const { values, setFieldValue } = useFormikContext();
  const contentValue = (values as any)?.content;
  const fieldValue: BlogContent = contentValue[index];

  const onChangeVal = (value: any) => {
    const fieldChangeVal = { ...fieldValue, data: value };
    contentValue[index] = fieldChangeVal;
    setFieldValue('content', contentValue);
  };

  const onContentStateChange = value => {
    onChangeVal(value);
  };

  const onChangeTextarea = ({ target: { value } }) => {
    onChangeVal(draftService.htmlToDraftBlocks(value));
  };

  const renderDOM = useMemo(() => {
    return (
      <Box className={clsx('draft-editor', [className] && className)}>
        <Editor
          editorState={fieldValue.data}
          wrapperClassName="draft-editor__form-wrapper"
          editorClassName="draft-editor__form-editor"
          onEditorStateChange={onContentStateChange}
        />
        <Box className="wrap-raw-html">
          <TextAreaCommon onChange={onChangeTextarea} value={draftService.draftBlocksToHtml(fieldValue.data)} autoSize={{ minRows: 3 }} />
        </Box>
      </Box>
    );
  }, [className, fieldValue.data]);

  return renderDOM;
};
