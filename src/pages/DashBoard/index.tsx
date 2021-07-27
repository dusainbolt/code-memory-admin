import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '../../common/Box';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const content = {
  entityMap: {},
  blocks: [{ key: '637gr', text: 'Initialized from content state.', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} }],
};

const htmlToDraftBlocks = html => {
  console.log(html);
  const blocksFromHtml = htmlToDraft(html);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};

export const DashboardPages = () => {
  const { t } = useTranslation();
  const [contentState, setContentState] = useState(htmlToDraftBlocks(draftToHtml(content)));

  const onContentStateChange = values => {
    console.log(values.getCurrentContent());
    console.log(convertToRaw(values.getCurrentContent()));
    setContentState(values);
  };

  return (
    <Box className="admin__content">
      <Editor editorState={contentState} wrapperClassName="demo-wrapper" editorClassName="demo-editor" onEditorStateChange={onContentStateChange} />
      <textarea disabled value={draftToHtml(convertToRaw(contentState.getCurrentContent()))} />
    </Box>
  );
};

// import React, { Component } from 'react';

// class EditorConvertToJSON extends Component {
//   constructor(props) {
//     super(props);
//     const contentState = convertFromRaw(content);
//     this.state = {
//       contentState,
//     }
//   }

//   onContentStateChange: Function = (contentState) => {
//     this.setState({
//       contentState,
//     });
//   };

//   render() {
//     const { contentState } = this.state;
//     return (
//       <div>
//         <Editor
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onContentStateChange={this.onContentStateChange}
//         />
//         <textarea
//           disabled
//           value={JSON.stringify(contentState, null, 4)}
//         />
//       </div>
//     );
//   }
// }
