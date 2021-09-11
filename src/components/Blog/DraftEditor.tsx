import React, { FC, useCallback, useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import clsx from 'clsx';
import { BlogContent } from '../../models/BlogModel';
import { useFormikContext } from 'formik';
import { Switch } from 'antd';
import Text from 'antd/lib/typography/Text';
import _ from 'lodash';
import { draftService } from '../../services/draftService';

export type EditorState = { index: number; data: any };

export const DraftEditor: FC<{ className?: string; index?: number }> = ({ className, index }) => {
  const { values, setFieldValue } = useFormikContext();
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const contentValue = (values as any)?.content;
  const fieldValue: BlogContent = contentValue[index];
  const [editorState, setEditorState] = useState<EditorState>({ data: fieldValue.data, index });

  const onContentStateChange = value => {
    setEditorState({ ...editorState, data: value });
  };

  useEffect(() => {
    onChangeVal(editorState);
  }, [editorState]);

  useEffect(() => {
    const dataState = draftService.draftBlocksToHtml(editorState.data);
    const dataForm = draftService.draftBlocksToHtml(fieldValue.data);
    if (dataState !== dataForm) {
      setEditorState({ data: fieldValue.data, index: index });
    }
  }, [fieldValue]);

  const onChangeVal = useCallback(
    _.debounce((editor: EditorState) => {
      console.log('Callback', editor.index, draftService.draftBlocksToHtml(editor.data));

      const fieldChangeVal = { ...fieldValue, data: editor.data };
      contentValue[editor.index] = fieldChangeVal;
      setFieldValue('content', contentValue);
    }, 2000),
    []
  );

  return (
    <div className={clsx('draft-editor', [className] && className)}>
      {isFocus && (
        <Editor
          editorState={editorState.data}
          wrapperClassName="draft-editor__form-wrapper"
          editorClassName="draft-editor__form-editor"
          onEditorStateChange={onContentStateChange}
        />
      )}
      <div>
        <Text></Text>
        <Switch defaultChecked onChange={checked => setIsFocus(checked)} />
      </div>
    </div>
  );
};

// const onChangeTextarea = ({ target: { value } }) => {
//   onChangeVal(draftService.htmlToDraftBlocks(value));
// };

{
  /* <Box className="wrap-raw-html">
            <TextAreaCommon onChange={onChangeTextarea} value={draftService.draftBlocksToHtml(fieldValue.data)} autoSize={{ minRows: 3 }} />
          </Box> */
}
