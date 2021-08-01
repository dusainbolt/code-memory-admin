import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '../../common/Box';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { TextAreaCommon } from '../../common/Input/TextArea';
import clsx from 'clsx';
import { BlogContent } from '../../models/BlogModel';

const content = {
  entityMap: {},
  blocks: [{ key: '637gr', text: 'Initialized from content state.', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} }],
};

const htmlToDraftBlocks = html => {
  const blocksFromHtml = htmlToDraft(html);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};

export interface IDraftEditor extends BlogContent {
  className?: string;
  fieldName?: string;
}

export const DraftEditor = ({ className, type, data, language }: IDraftEditor) => {
  const { t } = useTranslation();
  const [contentState, setContentState] = useState(htmlToDraftBlocks(draftToHtml(content)));

  const onContentStateChange = values => {
    console.log(values.getCurrentContent());
    console.log(convertToRaw(values.getCurrentContent()));
    setContentState(values);
  };
  const onChangeTextarea = ({ target: { value } }) => {
    setContentState(htmlToDraftBlocks(value));
  };

  return (
    <Box className={clsx('draft-editor', [className] && className)}>
      <Editor
        editorState={contentState}
        wrapperClassName="draft-editor__form-wrapper"
        editorClassName="draft-editor__form-editor"
        onEditorStateChange={onContentStateChange}
      />
      <Box className="wrap-raw-html">
        <TextAreaCommon onChange={onChangeTextarea} value={draftToHtml(convertToRaw(contentState.getCurrentContent()))} autoSize={{ minRows: 3 }} />
      </Box>
    </Box>
  );
};
