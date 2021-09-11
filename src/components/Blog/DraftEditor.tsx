import React, { FC, useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import clsx from 'clsx';
import { BlogContent } from '../../models/BlogModel';
import { Switch } from 'antd';
import Text from 'antd/lib/typography/Text';
import { draftService } from '../../services/draftService';
import { useTranslation } from 'react-i18next';

export type EditorState = { index: number; data: any };

export const DraftEditor: FC<{ className?: string; fieldValue: BlogContent; callbackChange: any }> = ({ fieldValue, className, callbackChange }) => {
  const { t } = useTranslation();
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const [editorState, setEditorState] = useState(fieldValue.data);

  const onContentStateChange = value => {
    setEditorState(value);
  };

  useEffect(() => {
    if (draftService.checkDiff(fieldValue.data, editorState)) {
      setEditorState(fieldValue.data);
    }
  }, [fieldValue]);

  return (
    <div className={clsx('draft-editor', [className] && className)}>
      {isFocus && (
        <Editor
          editorState={editorState}
          onFocus={event => {}}
          onBlur={(event, editorState) => {
            callbackChange(editorState);
          }}
          onTab={event => {}}
          wrapperClassName="draft-editor__form-wrapper"
          editorClassName="draft-editor__form-editor"
          onEditorStateChange={onContentStateChange}
        />
      )}
      <div>
        <Text>{t('blog.switch_edit')}</Text>
        <Switch defaultChecked onChange={checked => setIsFocus(checked)} />
      </div>
    </div>
  );
};
