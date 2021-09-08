import React, { Fragment, useMemo, useState } from 'react';
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
import { useFormikContext } from 'formik';
import { draftService } from '../../services/draftService';

const content = {
  entityMap: {},
  blocks: [{ key: '637gr', text: 'Initialized from content state.', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} }],
};

const html =
  '<p>12</p> <p>41</p> <p><strong>24</strong></p> <p>124</p> <h5><strong>12</strong></h5> <p>421</p> <p>41Initialized from content state.</p>';

const htmlToDraftBlocks = html => {
  const blocksFromHtml = htmlToDraft(html);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};

export interface IDraftEditor extends BlogContent {
  className?: string;
  index?: number;
}

export const DraftEditor = ({ className, index }: IDraftEditor) => {
  const { t } = useTranslation();
  const { values, setFieldValue } = useFormikContext();
  const contentValue = (values as any)?.content;
  const fieldValue: BlogContent = contentValue[index];
  // console.log('CHANGE');
  const onChangeVal = (value: any) => {
    const fieldChangeVal = { ...fieldValue, data: value };
    contentValue[index] = fieldChangeVal;
    setFieldValue('content', contentValue);
  };

  const onContentStateChange = value => {
    onChangeVal(draftService.draftBlocksToHtml(value));
  };
  const onChangeTextarea = ({ target: { value } }) => {
    onChangeVal(draftService.draftBlocksToHtml(value));
  };

  const renderDOM = useMemo(() => {
    console.log(fieldValue);
    return (
      <Box className={clsx('draft-editor', [className] && className)}>
        <Editor
          editorState={draftService.htmlToDraftBlocks(fieldValue.data)}
          wrapperClassName="draft-editor__form-wrapper"
          editorClassName="draft-editor__form-editor"
          onEditorStateChange={onContentStateChange}
        />
        <Box className="wrap-raw-html">
          <TextAreaCommon onChange={onChangeTextarea} value={fieldValue.data} autoSize={{ minRows: 3 }} />
        </Box>
      </Box>
    );
  }, [className, fieldValue.data]);

  return renderDOM;
};
